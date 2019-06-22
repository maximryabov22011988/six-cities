import { CHANGE_CITY } from './types';

const changeCity = city => ({
  type: CHANGE_CITY,
  payload: city
});

export { changeCity };
