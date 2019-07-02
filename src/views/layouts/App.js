import React from 'react';
import { connect } from 'react-redux';

import MainPage from '../pages/MainPage';

import {
  getCities,
  getCurrentCity,
  getCurrentOffers
} from '../../state/offers/selectors';
import { getReadyApp } from '../../state/app/selectors';

import { loadOffers } from '../../state/offers/operations';
import * as offerActions from '../../state/offers/actions';
import * as appActions from '../../state/app/actions';
import * as UIActions from '../../state/UI/actions';

class App extends React.Component {
  componentDidMount() {
    const { isReadyApp, init } = this.props;
    if (!isReadyApp) {
      init();
    }
  }

  render() {
    const { isReadyApp, currentCity, cities, offers } = this.props;

    if (isReadyApp) {
      return (
        <MainPage currentCity={currentCity} cities={cities} offers={offers} />
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  isReadyApp: getReadyApp(state),
  currentCity: getCurrentCity(state),
  offers: getCurrentOffers(state),
  cities: getCities(state)
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
  }
});

export { App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
