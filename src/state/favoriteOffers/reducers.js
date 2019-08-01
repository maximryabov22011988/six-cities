import * as types from './types';
import { normalizeDataHelper } from '../utils';

const favoriteOffersInitialState = {};

const favoriteOffers = (state = favoriteOffersInitialState, action) => {
  switch (action.type) {
    case types.REQUEST_FAVORITE_OFFERS: {
      return favoriteOffersInitialState;
    }
    case types.RECEIVE_FAVORITE_OFFERS: {
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

export default favoriteOffers;
