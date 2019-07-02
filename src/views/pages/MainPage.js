import React from 'react';
import PropTypes from 'prop-types';

import Header from './mainPage/Header';
import Logo from './mainPage/Logo';
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
      <React.Fragment>
        <div style={{ display: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="icon-arrow-select" viewBox="0 0 7 4">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
              />
            </symbol>
            <symbol id="icon-bookmark" viewBox="0 0 17 18">
              <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
            </symbol>
            <symbol id="icon-star" viewBox="0 0 13 12">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
              />
            </symbol>
          </svg>
        </div>
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
      </React.Fragment>
    );
  }
}

MainPage.propTypes = propTypes;

export default MainPage;
