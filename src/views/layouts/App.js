import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainPage from '../pages/MainPage';

import {
  getCities,
  getCurrentCity,
  getCurrentOffers
} from '../../state/offers/selectors';
import { isReadyApp } from '../../state/app/selectors';

import { loadOffers } from '../../state/offers/operations';
import * as offerActions from '../../state/offers/actions';
import * as appActions from '../../state/app/actions';
import * as UIActions from '../../state/UI/actions';

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
  changeCity: PropTypes.func.isRequired
};

class App extends React.Component {
  componentDidMount() {
    const { isReadyApp, init } = this.props;
    if (!isReadyApp) {
      init();
    }
  }

  render() {
    const { isReadyApp, currentCity, cities, offers, changeCity } = this.props;

    if (isReadyApp) {
      return (
        <MainPage
          currentCity={currentCity}
          cities={cities}
          offers={offers}
          changeCity={changeCity}
        />
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  isReadyApp: isReadyApp(state),
  currentCity: getCurrentCity(state),
  cities: getCities(state),
  offers: getCurrentOffers(state)
});

const mapDispatchToProps = dispatch => ({
  init() {
    dispatch(loadOffers()).then(response => {
      if (response && response.data) {
        const offers = response.data;

        const initialCity = offers[0].city;
        const city = {
          name: initialCity.name,
          location: [
            initialCity.location.latitude,
            initialCity.location.longitude
          ],
          zoom: initialCity.location.zoom
        };

        dispatch(offerActions.receiveOffers(offers));
        dispatch(UIActions.changeCity(city));
        dispatch(appActions.toogleReadyApp());
      }
    });
  },
  changeCity(city) {
    dispatch(UIActions.changeCity(city));
  }
});

App.propTypes = propTypes;

export { App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
