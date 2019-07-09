import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import MainPage from '../pages/MainPage';
import FavoriteList from '../pages/FavoriteList';

import PrivateRoute from '../utils/PrivateRoute';

import {
  getCities,
  transformCurrentCity,
  getCurrentOffers
} from '../../state/offers/selectors';
import { getIsReady, getIsAuth, getUser } from '../../state/app/selectors';

import { init, signIn } from '../../state/app/operations';
import { changeCity } from '../../state/UI/actions';

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
  init: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
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
              render={() =>
                isAuthUser ? (
                  <Redirect to="/" exact />
                ) : (
                  <SignIn onSignIn={this.handleSignIn} />
                )
              }
            />
            <PrivateRoute
              path="/favorites"
              isAuth={isAuthUser}
              component={() => (
                <FavoriteList isAuthUser={isAuthUser} user={user} />
              )}
            />
          </Switch>
        </React.Fragment>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  isReadyApp: getIsReady(state),
  isAuthUser: getIsAuth(state),
  user: getUser(state),
  currentCity: transformCurrentCity(state),
  cities: getCities(state),
  offers: getCurrentOffers(state)
});

const mapDispatchToProps = {
  init,
  signIn,
  changeCity
};

App.propTypes = propTypes;

export { App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
