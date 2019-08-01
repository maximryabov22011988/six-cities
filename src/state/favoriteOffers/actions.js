import * as types from './types';

export const requestFavoriteOffers = () => ({
  type: types.REQUEST_FAVORITE_OFFERS,
});

export const receiveFavoriteOffers = (favoritiesOffers) => ({
  type: types.RECEIVE_FAVORITE_OFFERS,
  payload: favoritiesOffers,
});

export const addOfferToFavorities = () => ({
  type: types.ADD_OFFER_TO_FAVORITIES,
});

export const removeOfferFromFavorities = () => ({
  type: types.REMOVE_OFFER_FROM_FAVORITIES,
});

export const updateOffers = (updatedOffer) => ({
  type: types.UPDATE_OFFERS,
  payload: updatedOffer,
});
