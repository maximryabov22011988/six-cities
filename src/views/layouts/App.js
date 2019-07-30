import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import MainPage from '../pages/MainPage';
import FavoriteList from '../pages/FavoriteList';
import PlaceCard from '../pages/PlaceCard';

import PrivateRoute from '../utils/PrivateRoute';
import RedirectToLogin from '../utils/RedirectToLogin';

import { getCities, transformCurrentCity } from '../../state/offers/selectors';
import { getIsReady, getIsAuth, getUser } from '../../state/app/selectors';
import { getOffersBySorting } from '../../state/UI/selectors';

import { init, signIn } from '../../state/app/operations';
import { addOfferToFavorities, removeOfferFromFavorities } from '../../state/offers/operations';
import { changeCity, changeSorting } from '../../state/UI/actions';

const propTypes = {
  addOfferToFavorities: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeSorting: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number,
    })
  ).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  init: PropTypes.func.isRequired,
  isReadyApp: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeOfferFromFavorities: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
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
      changeCity,
      changeSorting,
      addOfferToFavorities,
      removeOfferFromFavorities,
    } = this.props;

    if (isReadyApp) {
      return (
        <React.Fragment>
          <Switch>
            <Route
              path="/login"
              render={() => (isAuthUser ? <Redirect exact to="/" /> : <SignIn onSignIn={this.handleSignIn} />)}
            />
            <Route
              exact
              path="/"
              render={() => (
                <MainPage
                  addOfferToFavorities={addOfferToFavorities}
                  changeCity={changeCity}
                  changeSorting={changeSorting}
                  cities={cities}
                  currentCity={currentCity}
                  isAuthUser={isAuthUser}
                  offers={offers}
                  removeOfferFromFavorities={removeOfferFromFavorities}
                  user={user}
                />
              )}
            />
            <Route
              path="/offer/:id"
              render={() => (
                <PlaceCard
                  addOfferToFavorities={addOfferToFavorities}
                  isAuthUser={isAuthUser}
                  removeOfferFromFavorities={removeOfferFromFavorities}
                  user={user}
                />
              )}
            />
            <PrivateRoute
              component={() => <FavoriteList isAuthUser={isAuthUser} user={user} />}
              isAuth={isAuthUser}
              path="/favorites"
            />
          </Switch>
          <RedirectToLogin />
        </React.Fragment>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => ({
  isReadyApp: getIsReady(state),
  isAuthUser: getIsAuth(state),
  user: getUser(state),
  currentCity: transformCurrentCity(state),
  cities: getCities(state),
  offers: getOffersBySorting(state),
});

const mapDispatchToProps = {
  init,
  signIn,
  changeCity,
  changeSorting,
  addOfferToFavorities,
  removeOfferFromFavorities,
};

App.propTypes = propTypes;

export { App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
