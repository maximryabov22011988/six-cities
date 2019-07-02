import * as actions from './actions';

export const loadOffers = () => (dispatch, getState, api) => {
  dispatch(actions.requestOffers());
  return api.get('/hotels');
};
