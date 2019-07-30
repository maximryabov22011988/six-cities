import { get } from 'lodash';

import * as actions from './actions';

export const loadOffers = () => (dispatch, getState, api) => {
  dispatch(actions.requestOffers());
  return api.get('/hotels');
};

export const addOfferToFavorities = (hotelId) => async (dispatch, getState, api) => {
  dispatch(actions.addOfferToFavorities());
  const response = await api.post(`/favorite/${hotelId}/1`);
  const updatedOffer = get(response, 'data', null);
  if (updatedOffer) {
    dispatch(actions.updateOffers(updatedOffer));
  }
};

export const removeOfferFromFavorities = (hotelId) => async (dispatch, getState, api) => {
  dispatch(actions.removeOfferFromFavorities());
  const response = await api.post(`/favorite/${hotelId}/0`);
  const updatedOffer = get(response, 'data', null);
  if (updatedOffer) {
    dispatch(actions.updateOffers(updatedOffer));
  }
};
