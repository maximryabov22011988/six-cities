import { createSelector } from 'reselect';
import { groupBy } from 'lodash';

import { denormalizeDataHelper } from '../utils';
import nameSpace from '../name-spaces';

const getFavoriteOffers = createSelector(
  [(state) => state[nameSpace.FAVORITE_OFFERS]],
  (favoriteOffers) => {
    let result;

    if (favoriteOffers) {
      const offers = denormalizeDataHelper(favoriteOffers);
      result = groupBy(offers, (offer) => offer.city.name);
    } else {
      result = [];
    }

    return result;
  }
);

export { getFavoriteOffers };
