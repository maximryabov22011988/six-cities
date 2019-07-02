import { createSelector } from 'reselect';
import { find, filter, reduce } from 'lodash';

import { denormalizeDataHelper } from '../utils';
import nameSpace from '../name-spaces';

const getOffers = state => state[nameSpace.OFFERS];
const getCity = state => state[nameSpace.UI].currentCity;

const getAllOffers = createSelector(
  [getOffers],
  offers => {
    let result;

    if (offers) {
      result = denormalizeDataHelper(offers);
    } else {
      result = [];
    }

    return result;
  }
);

const getCities = createSelector(
  [getAllOffers],
  offers => {
    let result;

    if (offers) {
      result = reduce(
        offers,
        (acc, item) => {
          const isFound = find(acc, { name: item.city.name });
          return !isFound
            ? [
                ...acc,
                {
                  name: item.city.name,
                  location: [
                    item.city.location.latitude,
                    item.city.location.longitude
                  ],
                  zoom: item.city.location.zoom
                }
              ]
            : acc;
        },
        []
      );
    } else {
      result = [];
    }

    return result;
  }
);

const getCurrentCity = createSelector(
  [getCity],
  currentCity => {
    let result;

    if (currentCity) {
      result = {
        name: currentCity.name,
        location: [
          currentCity.location.latitude,
          currentCity.location.longitude
        ],
        zoom: currentCity.location.zoom
      };
    } else {
      result = {};
    }

    return result;
  }
);

const getCurrentOffers = createSelector(
  [getCity, getAllOffers],
  (currentCity, allOffers) => {
    let result;

    if (currentCity) {
      result = filter(allOffers, { city: { name: currentCity.name } });
    } else {
      result = [];
    }

    return result;
  }
);

export { getCurrentCity, getCities, getCurrentOffers };
