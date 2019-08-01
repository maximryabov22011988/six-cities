import * as types from './types';
import * as favoriteOffersTypes from '../favoriteOffers/types';
import { normalizeDataHelper } from '../utils';

const offersInitialState = {};

const offers = (state = offersInitialState, action) => {
  switch (action.type) {
    case types.RECEIVE_OFFERS: {
      return {
        ...state,
        ...normalizeDataHelper(action.payload),
      };
    }
    case favoriteOffersTypes.UPDATE_OFFERS: {
      const updatedOffer = action.payload;
      return {
        ...state,
        [updatedOffer.id]: updatedOffer,
      };
    }
    default: {
      return state;
    }
  }
};

export default offers;
