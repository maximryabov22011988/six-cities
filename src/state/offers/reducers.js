import { combineReducers } from 'redux';

import * as types from './types';
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

const serverOffers = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_OFFERS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const appState = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_OFFERS: {
      return {
        ...state,
        loading: true
      };
    }
    case types.RECEIVE_OFFERS: {
      return {
        ...state,
        loading: false
      };
    }
    case types.RESOURCE_NOT_FOUND: {
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  city,
  offers,
  serverOffers,
  appState
});
