import { get } from 'lodash';

import * as actions from './actions';

export const loadFavoriteOffers = () => async (dispatch, getState, api) => {
  dispatch(actions.requestFavoriteOffers());
  const response = await api.get('/favorite');
  const favoriteOffers = get(response, 'data', null);
  if (favoriteOffers) {
    dispatch(actions.receiveFavoriteOffers(favoriteOffers));
  }
};

export const addOfferToFavorities = (hotelId) => async (dispatch, getState, api) => {
  dispatch(actions.addOfferToFavorities());
  const response = await api.post(`/favorite/${hotelId}/1`);
  const updatedOffer = get(response, 'data', null);
  if (updatedOffer) {
    dispatch(actions.updateOffers(updatedOffer));
    dispatch(loadFavoriteOffers());
  }
};

export const removeOfferFromFavorities = (hotelId) => async (dispatch, getState, api) => {
  dispatch(actions.removeOfferFromFavorities());
  const response = await api.post(`/favorite/${hotelId}/0`);
  const updatedOffer = get(response, 'data', null);
  if (updatedOffer) {
    dispatch(actions.updateOffers(updatedOffer));
    dispatch(loadFavoriteOffers());
  }
};
