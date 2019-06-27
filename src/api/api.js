import axios from 'axios';
import * as actions from '../state/offers/actions';

const createAPI = dispatch => {
  const api = axios.create({
    baseURL: 'https://es31-server.appspot.com/six-cities',
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = response => response;
  const onFail = error => {
    if (error.response.status === 403) {
      // dispatch(actions.requireAuthorization(true));
    }
    if (error.response.status === 404) {
      const {
        data: { error: errorMessage },
        status
      } = error.response;
      dispatch(actions.resourceNotFound({ status, errorMessage }));
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
