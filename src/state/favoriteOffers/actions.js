import * as types from './types';

export const requestFavoriteOffers = () => ({
  type: types.REQUEST_FAVORITE_OFFERS,
});

export const receiveFavoriteOffers = (favoritiesOffers) => ({
  type: types.RECEIVE_FAVORITE_OFFERS,
  payload: favoritiesOffers,
});

export const addOfferToFavorities = (hotelId) => ({
  type: types.ADD_OFFER_TO_FAVORITIES,
  payload: hotelId,
});

export const removeOfferFromFavorities = (hotelId) => ({
  type: types.REMOVE_OFFER_FROM_FAVORITIES,
  payload: hotelId,
});
