import { createSelector } from 'reselect';
import { find, filter, reduce } from 'lodash';

import calcDistance from '../../views/utils/calcDistance';
import { denormalizeData } from '../utils';
import nameSpace from '../name-spaces';

const getCurrentOffer = (state, props) => state[nameSpace.OFFERS][props.match.params.id];

const getCurrentCity = (state) => state[nameSpace.UI].currentCity;

const getOffers = createSelector(
  [(state) => state[nameSpace.OFFERS]],
  (offers) => {
    let result;

    if (offers) {
      result = denormalizeData(offers);
    } else {
      result = [];
    }

    return result;
  }
);

const getNearOffers = createSelector(
  [getOffers, getCurrentOffer],
  (offers, currentOffer) => {
    let result;
    const sliceSettings = {
      START: 1,
      END: 4,
    };

    if (offers && currentOffer) {
      result = offers
        .map((offer) => ({
          ...offer,
          distance: calcDistance(
            currentOffer.location.latitude,
            currentOffer.location.longitude,
            offer.location.latitude,
            offer.location.longitude
          ),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(sliceSettings.START, sliceSettings.END);
    } else {
      result = [];
    }

    return result;
  }
);

const getOffersByCity = createSelector(
  [getCurrentCity, getOffers],
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

const getCities = createSelector(
  [getOffers],
  (offers) => {
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
                  location: [item.city.location.latitude, item.city.location.longitude],
                  zoom: item.city.location.zoom,
                },
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

const transformCurrentCity = createSelector(
  [getCurrentCity],
  (currentCity) => {
    let result;

    if (currentCity) {
      result = {
        name: currentCity.name,
        location: [currentCity.location.latitude, currentCity.location.longitude],
        zoom: currentCity.location.zoom,
      };
    } else {
      result = {};
    }

    return result;
  }
);

export { transformCurrentCity, getOffers, getCities, getOffersByCity, getCurrentOffer, getNearOffers };
