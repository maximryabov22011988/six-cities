import * as types from './types';

export const requestOffers = () => ({
  type: types.REQUEST_OFFERS,
});

export const receiveOffers = (offers) => ({
  type: types.RECEIVE_OFFERS,
  payload: offers,
});

export const updateOffers = (updatedOffer) => ({
  type: types.UPDATE_OFFERS,
  payload: updatedOffer,
});

export const addOfferToFavorities = () => ({
  type: types.ADD_OFFER_TO_FAVORITIES,
});

export const removeOfferFromFavorities = () => ({
  type: types.REMOVE_OFFER_FROM_FAVORITIES,
});
