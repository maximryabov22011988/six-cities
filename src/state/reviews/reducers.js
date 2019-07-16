import * as types from './types';
import { normalizeDataHelper } from '../utils';

const reviewsInitialState = {};

const reviews = (state = reviewsInitialState, action) => {
  switch (action.type) {
    case types.RECEIVE_REVIEWS: {
      return {
        ...state,
        ...normalizeDataHelper(action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default reviews;
