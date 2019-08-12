import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { keys } from 'lodash';

import Loader from '../components/Loader';
import Notification from '../components/Notification';

import SignIn from '../pages/SignIn';
import MainPage from '../pages/MainPage';
import FavoriteList from '../pages/FavoriteList';
import PlaceCard from '../pages/PlaceCard';

import PrivateRoute from '../utils/PrivateRoute';
import RedirectToLogin from '../utils/RedirectToLogin';

import { getCities, transformCurrentCity } from '../../state/offers/selectors';
import { getFavoriteOffers } from '../../state/favoriteOffers/selectors';
import { getIsReady, getIsAuth, getUser } from '../../state/app/selectors';
import { getOffersBySorting } from '../../state/UI/selectors';

import { init, signIn } from '../../state/app/operations';
import { addOfferToFavorities, removeOfferFromFavorities } from '../../state/favoriteOffers/operations';
import { changeCity, changeSorting } from '../../state/UI/actions';

import { City, OfferCity, Offer, User, onAddToFavorities, onRemoveFromFavorities, onSignIn } from '../types';

interface Props {
  addOfferToFavorities: onAddToFavorities;
  changeCity: () => void;
  changeSorting: () => void;
  cities: Array<City>;
  currentCity: OfferCity;
  favoriteOffers: Array<Offer>;
  init: () => void;
  isAuthUser: boolean;
  isReadyApp: boolean;
  offers: Array<Offer>;
  removeOfferFromFavorities: onRemoveFromFavorities;
  signIn: onSignIn;
  user: User;
}

class App extends React.Component<Props> {
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

  haveFavoritePlaceCard = () => {
    const { favoriteOffers } = this.props;
    return keys(favoriteOffers).length > 0;
  };

  render() {
    const {
      favoriteOffers,
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
              component={() => (
                <FavoriteList
                  isAuthUser={isAuthUser}
                  isEmpty={!this.haveFavoritePlaceCard()}
                  offers={favoriteOffers}
                  user={user}
                  onAddOfferToFavorities={addOfferToFavorities}
                  onRemoveOfferFromFavorities={removeOfferFromFavorities}
                />
              )}
              isAuth={isAuthUser}
              path="/favorites"
            />
          </Switch>

          <RedirectToLogin />
          <Loader />
          <Notification />
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
  favoriteOffers: getFavoriteOffers(state),
});

const mapDispatchToProps = {
  init,
  signIn,
  changeCity,
  changeSorting,
  addOfferToFavorities,
  removeOfferFromFavorities,
};

export { App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
