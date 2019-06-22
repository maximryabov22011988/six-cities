import { createSelector } from 'reselect';

import cities from '../../views/mocks/cities';

const getCurrentCity = state => state.city;
const getAllOffers = state => state.offers;

const getCityOffers = createSelector(
  [getCurrentCity, getAllOffers],
  (currentCity, allOffers) => {
    let result;

    if (currentCity) {
      const city = allOffers.find(item => item.city === currentCity);
      result = city.offers;
    } else {
      result = [];
    }

    return result;
  }
);

const getCityCoords = createSelector(
  [getCurrentCity],
  currentCity => {
    let result;

    if (currentCity) {
      const city = cities.find(item => item.city === currentCity);
      result = [city.coords.latitude, city.coords.longitude];
    } else {
      result = [];
    }

    return result;
  }
);

export { getCityOffers, getCityCoords };
