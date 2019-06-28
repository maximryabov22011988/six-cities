import * as types from './types';
import { normalizeDataHelper } from '../utils';
import allOffers from '../../views/mocks/offers';

const city = (state = 'Paris', action) => {
  switch (action.type) {
    case types.CHANGE_CITY: {
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

const offersInitialState = {
  currentCity: '',
  byId: {}
};
const serverOffers = (state = offersInitialState, action) => {
  switch (action.type) {
    case types.RECEIVE_OFFERS: {
      return {
        ...state,
        ...normalizeDataHelper(action.payload)
      };
    }
    default: {
      return state;
    }
  }
};

export default {
  city,
  offers,
  serverOffers
};
