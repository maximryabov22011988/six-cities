import * as types from './types';

export const changeCity = city => ({
  type: types.CHANGE_CITY,
  payload: city
});
