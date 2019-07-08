import * as types from './types';

import { loadOffers } from '../offers/operations';
import * as operations from './operations';

import * as UIActions from '../UI/actions';
import * as offerActions from '../offers/actions';

export const requestSuccess = () => ({
  type: types.REQUEST_SUCCESS
});

export const requestFailure = () => ({
  type: types.REQUEST_FAILURE
});

export const badRequest = error => ({
  type: types.BAD_REQUEST,
  payload: error
});

export const resourceNotFound = error => ({
  type: types.RESOURCE_NOT_FOUND,
  payload: error
});

export const requestSignIn = () => ({
  type: types.REQUEST_SIGN_IN
});

export const receiveSignIn = user => ({
  type: types.RECEIVE_SIGN_IN,
  payload: user
});

export const toogleAuthApp = () => ({
  type: types.TOOGLE_AUTH_APP
});

export const toogleReadyApp = () => ({
  type: types.TOOGLE_READY_APP
});

export const init = () => async dispatch => {
  const response = await dispatch(loadOffers());
  const offers = response.data;

  if (offers) {
    const initialCity = offers[0].city;
    const city = {
      name: initialCity.name,
      location: [initialCity.location.latitude, initialCity.location.longitude],
      zoom: initialCity.location.zoom
    };

    dispatch(offerActions.receiveOffers(offers));
    dispatch(UIActions.changeCity(city));
    dispatch(toogleReadyApp());
  }
};

export const signIn = (email, password) => async dispatch => {
  const response = await dispatch(operations.signIn(email, password));
  const user = response.data;
  if (user) {
    dispatch(toogleAuthApp());
    dispatch(receiveSignIn(user));
  }
};
