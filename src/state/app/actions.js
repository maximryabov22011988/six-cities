import * as types from './types';

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
