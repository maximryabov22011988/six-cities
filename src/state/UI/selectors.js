import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

import { sortingName } from '../../views/constants/options';
import { getOffersByCity } from '../offers/selectors';
import nameSpace from '../name-spaces';

const getCurrentSorting = createSelector(
  [(state) => state[nameSpace.UI].sorting],
  (currentSorting) => currentSorting,
);

const getOffersBySorting = createSelector(
  [getCurrentSorting, getOffersByCity],
  (currentSorting, offers) => {
    let result;

    if (currentSorting && offers) {
      const sortingOffers = {
        [sortingName.POPULAR]: offers,
        [sortingName.PRICE_LOW_TO_HIGH]: orderBy(offers, 'price', 'asc'),
        [sortingName.PRICE_HIGH_TO_LOW]: orderBy(offers, 'price', 'desc'),
        [sortingName.TOP_RATED]: orderBy(offers, 'rating', 'desc'),
      };
      result = sortingOffers[currentSorting];
    } else {
      result = [];
    }

    return result;
  },
);

export { getOffersBySorting };
