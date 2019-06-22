import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './mainPage/Header';
import Logo from './mainPage/Logo';
import UserInfo from './mainPage/UserInfo';

import Content from './mainPage/Content';
import Nav from './mainPage/Nav';
import NavList from './mainPage/NavList';
import PlacesContainer from './mainPage/PlacesContainer';
import Places from './mainPage/Places';
import Map from './mainPage/Map';

import { changeCity } from '../../state/offers/actions';
import { getCityOffers, getCityCoords } from '../../state/offers/selectors';

import cities from '../mocks/cities';

const user = {
  avatar: '',
  email: 'Oliver.conner@gmail.com'
};

const propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number)
  }).isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      offers: PropTypes.array
    })
  ).isRequired
};

class MainPage extends React.Component {
  get searchResultsText() {
    const { city, offers } = this.props;
    return `${offers.length} places to stay in ${city.name}`;
  }

  handleChangeCity = city => evt => {
    evt.preventDefault();
    const { changeCity } = this.props;
    changeCity(city);
  };

  render() {
    const { city, offers } = this.props;

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
        <Header logo={<Logo />} userInfo={<UserInfo user={user} />} />
        <Content>
          <Nav>
            <NavList
              currentCity={city.name}
              cities={cities}
              onChangeCity={this.handleChangeCity}
            />
          </Nav>
          <PlacesContainer
            leftPanel={
              <Places
                searchResultText={this.searchResultsText}
                offers={offers}
              />
            }
            rightPanel={<Map offers={offers} city={city.coords} />}
          />
        </Content>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  city: {
    name: state.city,
    coords: getCityCoords(state)
  },
  offers: getCityOffers(state)
});

const mapDispatchToProps = dispatch => ({
  changeCity: city => dispatch(changeCity(city))
});

MainPage.propTypes = propTypes;

export { MainPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
