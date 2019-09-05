import * as types from './types';
import { normalizeData } from '../utils';

const initialState = {};

const offers = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_OFFERS: {
      return {
        ...state,
        ...normalizeData(action.payload),
      };
    }
    case types.UPDATE_OFFERS: {
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

export { initialState };

export default offers;
