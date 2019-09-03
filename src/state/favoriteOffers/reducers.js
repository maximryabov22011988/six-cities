import { map, without } from 'lodash';

import * as types from './types';

const initialState = [];

const favoriteOffers = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_FAVORITE_OFFERS: {
      const favoriteOffers = action.payload;
      const favoriteOffersIds = map(favoriteOffers, (offer) => offer.id);
      return [...state, ...favoriteOffersIds];
    }
    case types.ADD_OFFER_TO_FAVORITIES: {
      const offerId = action.payload;
      return [...state, offerId];
    }
    case types.REMOVE_OFFER_FROM_FAVORITIES: {
      const offerId = action.payload;
      return [...without(state, offerId)];
    }
    default: {
      return state;
    }
  }
};

export { initialState };

export default favoriteOffers;
