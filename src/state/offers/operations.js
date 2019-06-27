import * as actions from './actions';

export const fetchOffers = () => (dispatch, getState, api) => {
  dispatch(actions.requestOffers());
  return api.get('/hotels').then(response => {
    if (response && response.data) {
      dispatch(actions.receiveOffers(response.data));
    }
  });
};
