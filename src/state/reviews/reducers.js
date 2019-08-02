import * as types from './types';
import { normalizeData } from '../utils';

const reviewsInitialState = {};

const reviews = (state = reviewsInitialState, action) => {
  switch (action.type) {
    case types.REQUEST_REVIEWS: {
      return reviewsInitialState;
    }
    case types.RECEIVE_REVIEWS: {
      return {
        ...state,
        ...normalizeData(action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default reviews;
