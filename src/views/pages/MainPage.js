import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/Page';
import Header from '../components/Header';
import Logo from '../components/Logo';
import UserInfo from '../components/UserInfo';

import Content from './mainPage/Content';
import Nav from './mainPage/Nav';
import NavList from './mainPage/NavList';
import PlacesContainer from './mainPage/PlacesContainer';
import Places from './mainPage/Places';
import Map from '../components/Map';

const propTypes = {
  changeCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number,
    }),
  ).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  isAuthUser: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    is_pro: PropTypes.bool,
  }).isRequired,
};

class MainPage extends React.Component {
  getSearchResultsText() {
    const { currentCity, offers } = this.props;
    return `${offers.length} places to stay in ${currentCity.name}`;
  }

  handleChangeCity = (city) => (evt) => {
    evt.preventDefault();
    const { changeCity } = this.props;
    changeCity(city);
  };

  render() {
    const { user, isAuthUser, currentCity, cities, offers } = this.props;

    return (
      <Page name="main">
        <Header
          logo={<Logo isActive position="header" />}
          userInfo={<UserInfo avatarUrl={user.avatar_url} email={user.email} isAuth={isAuthUser} />}
        />
        <Content>
          <Nav>
            <NavList cities={cities} currentCity={currentCity.name} onChangeCity={this.handleChangeCity} />
          </Nav>
          <PlacesContainer
            leftPanel={<Places offers={offers} searchResultText={this.getSearchResultsText()} />}
            rightPanel={<Map offers={offers} />}
          />
        </Content>
      </Page>
    );
  }
}

MainPage.propTypes = propTypes;

export default MainPage;
