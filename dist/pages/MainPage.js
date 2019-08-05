'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const Page_1 = require('../components/Page');
const Header_1 = require('../components/Header');
const Logo_1 = require('../components/Logo');
const UserInfo_1 = require('../components/UserInfo');
const Content_1 = require('./mainPage/Content');
const Nav_1 = require('./mainPage/Nav');
const NavList_1 = require('./mainPage/NavList');
const PlacesContainer_1 = require('./mainPage/PlacesContainer');
const Places_1 = require('./mainPage/Places');
const EmptyPlaces_1 = require('./mainPage/EmptyPlaces');
const Map_1 = require('../components/Map');
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
  isAuthUser: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeOfferFromFavorities: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    is_pro: PropTypes.bool,
  }).isRequired,
};
class MainPage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      activeOffer: null,
    };
    this.handleActiveOfferClick = (id) => (evt) => {
      evt.preventDefault();
      this.setState({
        activeOffer: id,
      });
    };
    this.handleAddToFavorities = (hotelId) => () => {
      const { addOfferToFavorities } = this.props;
      addOfferToFavorities(hotelId);
    };
    this.handleRemoveFromFavorities = (hotelId) => () => {
      const { removeOfferFromFavorities } = this.props;
      removeOfferFromFavorities(hotelId);
    };
    this.handleChangeCity = (city) => (evt) => {
      evt.preventDefault();
      const { changeCity } = this.props;
      changeCity(city);
    };
    this.handleChangeSorting = (sorting) => {
      const { changeSorting } = this.props;
      changeSorting(sorting);
    };
  }
  getSearchResultsText() {
    const { currentCity, offers } = this.props;
    return `${offers.length} places to stay in ${currentCity.name}`;
  }
  havePlaceCards() {
    const { offers } = this.props;
    return offers.length > 0;
  }
  render() {
    const { user, isAuthUser, currentCity, cities, offers } = this.props;
    const { activeOffer } = this.state;
    return React.createElement(
      Page_1.default,
      { parentClassName: 'main' },
      React.createElement(Header_1.default, {
        logo: React.createElement(Logo_1.default, { isActive: true, position: 'header' }),
        userInfo: React.createElement(UserInfo_1.default, {
          avatarUrl: user.avatar_url,
          email: user.email,
          isAuth: isAuthUser,
        }),
      }),
      React.createElement(
        Content_1.default,
        { isEmpty: !this.havePlaceCards() },
        React.createElement(
          Nav_1.default,
          null,
          React.createElement(NavList_1.default, {
            cities: cities,
            currentCity: currentCity.name,
            onChangeCity: this.handleChangeCity,
          })
        ),
        React.createElement(PlacesContainer_1.default, {
          isEmpty: !this.havePlaceCards(),
          leftPanel: this.havePlaceCards()
            ? React.createElement(Places_1.default, {
                offers: offers,
                searchResultText: this.getSearchResultsText(),
                onActiveOfferClick: this.handleActiveOfferClick,
                onAddToFavorities: this.handleAddToFavorities,
                onChangeSorting: this.handleChangeSorting,
                onRemoveFromFavorities: this.handleRemoveFromFavorities,
              })
            : React.createElement(EmptyPlaces_1.default, { city: currentCity.name }),
          rightPanel: React.createElement(Map_1.default, { activeOffer: activeOffer, offers: offers }),
        })
      )
    );
  }
}
MainPage.propTypes = propTypes;
exports.default = MainPage;
//# sourceMappingURL=MainPage.js.map
