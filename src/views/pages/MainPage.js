import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Logo from '../components/Logo';
import UserInfo from './mainPage/UserInfo';

import Content from './mainPage/Content';
import Nav from './mainPage/Nav';
import NavList from './mainPage/NavList';
import PlacesContainer from './mainPage/PlacesContainer';
import Places from './mainPage/Places';
import Map from './mainPage/Map';

const user = {
  avatar: '',
  email: 'Oliver.conner@gmail.com'
};

const propTypes = {
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

class MainPage extends React.Component {
  getSearchResultsText() {
    const { currentCity, offers } = this.props;
    return `${offers.length} places to stay in ${currentCity.name}`;
  }

  handleChangeCity = city => evt => {
    evt.preventDefault();
    const { changeCity } = this.props;
    changeCity(city);
  };

  render() {
    const { currentCity, cities, offers } = this.props;

    return (
      <div className="page page--gray page--main">
        <Header logo={<Logo />} userInfo={<UserInfo email={user.email} />} />
        <Content>
          <Nav>
            <NavList
              currentCity={currentCity.name}
              cities={cities}
              onChangeCity={this.handleChangeCity}
            />
          </Nav>
          <PlacesContainer
            leftPanel={
              <Places
                searchResultText={this.getSearchResultsText()}
                offers={offers}
              />
            }
            rightPanel={<Map offers={offers} />}
          />
        </Content>
      </div>
    );
  }
}

MainPage.propTypes = propTypes;

export default MainPage;
