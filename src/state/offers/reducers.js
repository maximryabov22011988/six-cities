import { combineReducers } from 'redux';

import { CHANGE_CITY } from './types';
import allOffers from '../../views/mocks/offers';

const city = (state = 'Paris', action) => {
  switch (action.type) {
    case CHANGE_CITY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const offers = (state = allOffers, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default combineReducers({
  city,
  offers
});
