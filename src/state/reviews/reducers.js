import * as types from './types';
import { normalizeData } from '../utils';

const initialState = {};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_REVIEWS: {
      return initialState;
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

export { initialState };

export default reviews;
