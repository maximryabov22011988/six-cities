import * as types from './types';

export const changeCity = city => ({
  type: types.CHANGE_CITY,
  payload: city
});

export const requestOffers = () => ({
  type: types.REQUEST_OFFERS
});

export const receiveOffers = offers => ({
  type: types.RECEIVE_OFFERS,
  payload: offers
});

export const resourceNotFound = error => ({
  type: types.RESOURCE_NOT_FOUND,
  payload: error
});
