import { createSelector } from 'reselect';
import { map, groupBy } from 'lodash';

import { getOffers } from '../offers/selectors';
import nameSpace from '../name-spaces';
import { normalizeData } from '../utils';

const getFavoriteOffersIds = (state) => state[nameSpace.FAVORITE_OFFERS];

const getFavoriteOffers = createSelector(
  [getOffers, getFavoriteOffersIds],
  (offers, favoriteOffersIds) => {
    let result;

    if (offers && favoriteOffersIds) {
      const offersMap = normalizeData(offers);
      const favoriteOffers = map(favoriteOffersIds, (id) => offersMap[id]);
      result = groupBy(favoriteOffers, (offer) => offer.city.name);
    } else {
      result = [];
    }

    return result;
  }
);

export { getFavoriteOffers };
