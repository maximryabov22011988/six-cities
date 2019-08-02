import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

import nameSpace from '../name-spaces';
import { denormalizeData } from '../utils';

const MAX_REVIEWS = 10;

const getReviews = createSelector(
  [(state) => state[nameSpace.REVIEWS]],
  (reviews) => {
    let result;

    if (reviews) {
      result = orderBy(denormalizeData(reviews).slice(0, MAX_REVIEWS), 'date', 'desc');
    } else {
      result = [];
    }

    return result;
  }
);

export { getReviews };
