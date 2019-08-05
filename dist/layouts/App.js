'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_redux_1 = require('react-redux');
const react_router_dom_1 = require('react-router-dom');
const lodash_1 = require('lodash');
const Loader_1 = require('../components/Loader');
const Notification_1 = require('../components/Notification');
const SignIn_1 = require('../pages/SignIn');
const MainPage_1 = require('../pages/MainPage');
const FavoriteList_1 = require('../pages/FavoriteList');
const PlaceCard_1 = require('../pages/PlaceCard');
const PrivateRoute_1 = require('../utils/PrivateRoute');
const RedirectToLogin_1 = require('../utils/RedirectToLogin');
const selectors_1 = require('../../state/offers/selectors');
const selectors_2 = require('../../state/favoriteOffers/selectors');
const selectors_3 = require('../../state/app/selectors');
const selectors_4 = require('../../state/UI/selectors');
const operations_1 = require('../../state/app/operations');
const operations_2 = require('../../state/favoriteOffers/operations');
const actions_1 = require('../../state/UI/actions');
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
  favoriteOffers: PropTypes.object,
  init: PropTypes.func.isRequired,
  isAuthUser: PropTypes.bool,
  isReadyApp: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeOfferFromFavorities: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  user: PropTypes.object,
};
class App extends React.Component {
  constructor() {
    super(...arguments);
    this.handleSignIn = (email, password) => {
      const { signIn } = this.props;
      signIn(email, password);
    };
    this.haveFavoritePlaceCard = () => {
      const { favoriteOffers } = this.props;
      return lodash_1.keys(favoriteOffers).length > 0;
    };
  }
  componentDidMount() {
    const { isReadyApp, init } = this.props;
    if (!isReadyApp) {
      init();
    }
  }
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
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          react_router_dom_1.Switch,
          null,
          React.createElement(react_router_dom_1.Route, {
            path: '/login',
            render: () =>
              isAuthUser
                ? React.createElement(react_router_dom_1.Redirect, { exact: true, to: '/' })
                : React.createElement(SignIn_1.default, { onSignIn: this.handleSignIn }),
          }),
          React.createElement(react_router_dom_1.Route, {
            exact: true,
            path: '/',
            render: () =>
              React.createElement(MainPage_1.default, {
                addOfferToFavorities: addOfferToFavorities,
                changeCity: changeCity,
                changeSorting: changeSorting,
                cities: cities,
                currentCity: currentCity,
                isAuthUser: isAuthUser,
                offers: offers,
                removeOfferFromFavorities: removeOfferFromFavorities,
                user: user,
              }),
          }),
          React.createElement(react_router_dom_1.Route, {
            path: '/offer/:id',
            render: () =>
              React.createElement(PlaceCard_1.default, {
                addOfferToFavorities: addOfferToFavorities,
                isAuthUser: isAuthUser,
                removeOfferFromFavorities: removeOfferFromFavorities,
                user: user,
              }),
          }),
          React.createElement(PrivateRoute_1.default, {
            component: () =>
              React.createElement(FavoriteList_1.default, {
                isAuthUser: isAuthUser,
                isEmpty: !this.haveFavoritePlaceCard(),
                offers: favoriteOffers,
                user: user,
                onAddOfferToFavorities: addOfferToFavorities,
                onRemoveOfferFromFavorities: removeOfferFromFavorities,
              }),
            isAuth: isAuthUser,
            path: '/favorites',
          })
        ),
        React.createElement(RedirectToLogin_1.default, null),
        React.createElement(Loader_1.default, null),
        React.createElement(Notification_1.default, null)
      );
    }
    return null;
  }
}
exports.App = App;
App.propTypes = propTypes;
const mapStateToProps = (state) => ({
  isReadyApp: selectors_3.getIsReady(state),
  isAuthUser: selectors_3.getIsAuth(state),
  user: selectors_3.getUser(state),
  currentCity: selectors_1.transformCurrentCity(state),
  cities: selectors_1.getCities(state),
  offers: selectors_4.getOffersBySorting(state),
  favoriteOffers: selectors_2.getFavoriteOffers(state),
});
const mapDispatchToProps = {
  init: operations_1.init,
  signIn: operations_1.signIn,
  changeCity: actions_1.changeCity,
  changeSorting: actions_1.changeSorting,
  addOfferToFavorities: operations_2.addOfferToFavorities,
  removeOfferFromFavorities: operations_2.removeOfferFromFavorities,
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map
