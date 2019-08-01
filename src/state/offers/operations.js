import { get } from 'lodash';

import * as actions from './actions';

export const loadOffers = () => async (dispatch, getState, api) => {
  dispatch(actions.requestOffers());
  const response = await api.get('/hotels');
  const offers = get(response, 'data', null);
  if (offers) {
    dispatch(actions.receiveOffers(offers));
    return offers;
  }
};
