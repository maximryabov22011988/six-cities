import * as types from './types';

export const requestSuccess = () => ({
  type: types.REQUEST_SUCCESS
});

export const requestFailure = () => ({
  type: types.REQUEST_FAILURE
});

export const resourceNotFound = error => ({
  type: types.RESOURCE_NOT_FOUND,
  payload: error
});
