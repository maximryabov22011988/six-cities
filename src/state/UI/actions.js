import * as types from './types';

export const changeCity = (city) => ({
  type: types.CHANGE_CITY,
  payload: city,
});

export const changeSorting = (sorting) => ({
  type: types.CHANGE_SORTING,
  payload: sorting,
});
