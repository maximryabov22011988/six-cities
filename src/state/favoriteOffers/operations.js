import { get } from 'lodash';

import * as actions from './actions';
import * as offerActions from '../offers/actions';

export const loadFavoriteOffers = () => async (dispatch, getState, api) => {
  dispatch(actions.requestFavoriteOffers());
  const response = await api.get('/favorite');
  const favoriteOffers = get(response, 'data', null);
  if (favoriteOffers) {
    dispatch(actions.receiveFavoriteOffers(favoriteOffers));
  }
};

export const addOfferToFavorities = (hotelId) => async (dispatch, getState, api) => {
  const response = await api.post(`/favorite/${hotelId}/1`);
  const updatedOffer = get(response, 'data', null);
  if (updatedOffer) {
    dispatch(offerActions.updateOffers(updatedOffer));
    dispatch(actions.addOfferToFavorities(hotelId));
  }
};

export const removeOfferFromFavorities = (hotelId) => async (dispatch, getState, api) => {
  const response = await api.post(`/favorite/${hotelId}/0`);
  const updatedOffer = get(response, 'data', null);
  if (updatedOffer) {
    dispatch(offerActions.updateOffers(updatedOffer));
    dispatch(actions.removeOfferFromFavorities(hotelId));
  }
};
