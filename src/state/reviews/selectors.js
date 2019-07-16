import { createSelector } from 'reselect';

import { denormalizeDataHelper } from '../utils';
import nameSpace from '../name-spaces';

const getReviews = createSelector(
  [(state) => state[nameSpace.REVIEWS]],
  (reviews) => {
    let result;

    if (reviews) {
      result = denormalizeDataHelper(reviews);
    } else {
      result = [];
    }

    return result;
  },
);

export { getReviews };
