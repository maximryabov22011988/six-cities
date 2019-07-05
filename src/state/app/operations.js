import * as actions from './actions';

export const signIn = (email, password) => (dispatch, getState, api) => {
  dispatch(actions.requestSignIn());
  return api.post('/login', { email, password });
};
