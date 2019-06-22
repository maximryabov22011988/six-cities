import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './mainPage/Header';
import Logo from './mainPage/Logo';
import UserInfo from './mainPage/UserInfo';
import LocationList from './mainPage/LocationList';
import PlaceCardList from './mainPage/PlaceCardList';
import Map from './mainPage/Map';

import { changeCity } from '../../state/offers/actions';
import { getCityOffers, getCityCoords } from '../../state/offers/selectors';

import cities from '../mocks/cities';

const user = {
  avatar: '',
  email: 'Oliver.conner@gmail.com'
};

const propTypes = PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number)
  }),
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      offers: PropTypes.array
    })
  )
}).isRequired;

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

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>

          <div className="cities tabs">
            <section className="locations container">
              <LocationList
                currentCity={city.name}
                cities={cities}
                onChangeCity={this.handleChangeCity}
              />
            </section>
          </div>

          <div className="cities__places-wrapper">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{this.searchResultsText}</b>

                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex="0"
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex="0">
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex="0">
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex="0">
                      Top rated first
                    </li>
                  </ul>
                  {/*
                <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select>
                */}
                </form>

                <PlaceCardList offers={offers} />
              </section>

              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} city={city.coords} />
                </section>
              </div>
            </div>
          </div>
        </main>
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
