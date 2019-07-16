import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

import { denormalizeDataHelper } from '../utils';
import nameSpace from '../name-spaces';

const getReviews = createSelector(
  [(state) => state[nameSpace.REVIEWS]],
  (reviews) => {
    let result;

    if (reviews) {
      result = orderBy(denormalizeDataHelper(reviews), 'date', 'desc');
    } else {
      result = [];
    }

    return result;
  },
);

export { getReviews };
