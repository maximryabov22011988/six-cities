import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import MainPage from '../pages/MainPage';

import {
  getCities,
  transformCurrentCity,
  getCurrentOffers
} from '../../state/offers/selectors';
import { isReadyApp, isAuthUser, getUser } from '../../state/app/selectors';

import { loadOffers } from '../../state/offers/operations';
import { signIn } from '../../state/app/operations';
import * as offerActions from '../../state/offers/actions';
import * as appActions from '../../state/app/actions';
import * as UIActions from '../../state/UI/actions';

const propTypes = {
  isReadyApp: PropTypes.bool.isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number)
  }).isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number
    })
  ).isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeCity: PropTypes.func.isRequired
};

class App extends React.Component {
  componentDidMount() {
    const { isReadyApp, init } = this.props;
    if (!isReadyApp) {
      init();
    }
  }

  handleSignIn = (email, password) => {
    const { signIn } = this.props;
    signIn(email, password);
  };

  render() {
    const {
      isReadyApp,
      isAuthUser,
      user,
      currentCity,
      cities,
      offers,
      changeCity
    } = this.props;

    if (isReadyApp) {
      return (
        <React.Fragment>
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <MainPage
                    user={user}
                    isAuthUser={isAuthUser}
                    currentCity={currentCity}
                    cities={cities}
                    offers={offers}
                    changeCity={changeCity}
                  />
                )}
              />
              <Route
                path="/login"
                exact
                render={() => <SignIn onSignIn={this.handleSignIn} />}
              />
            </Switch>
          </Router>
        </React.Fragment>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  isReadyApp: isReadyApp(state),
  isAuthUser: isAuthUser(state),
  user: getUser(state),
  currentCity: transformCurrentCity(state),
  cities: getCities(state),
  offers: getCurrentOffers(state)
});

const mapDispatchToProps = dispatch => ({
  init() {
    dispatch(loadOffers()).then(response => {
      if (response && response.data) {
        const offers = response.data;

        const initialCity = offers[0].city;
        const city = {
          name: initialCity.name,
          location: [
            initialCity.location.latitude,
            initialCity.location.longitude
          ],
          zoom: initialCity.location.zoom
        };

        dispatch(offerActions.receiveOffers(offers));
        dispatch(UIActions.changeCity(city));
        dispatch(appActions.toogleReadyApp());
      }
    });
  },
  signIn(email, password) {
    dispatch(signIn(email, password)).then(response => {
      if (response && response.data) {
        const user = response.data;
        dispatch(appActions.toogleAuthApp());
        dispatch(appActions.receiveSignIn(user));
      }
    });
  },
  changeCity(city) {
    dispatch(UIActions.changeCity(city));
  }
});

App.propTypes = propTypes;

export { App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
