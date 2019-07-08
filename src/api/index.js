import axios from 'axios';
import * as actions from '../state/app/actions';

const BASE_URL = 'https://es31-server.appspot.com/six-cities';
const TIMEOUT = 5000;

const code = {
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404
};

const createAPI = dispatch => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true
  });

  const onSuccess = response => {
    dispatch(actions.requestSuccess());
    return response;
  };

  const onFail = error => {
    const {
      data: { error: message },
      status
    } = error.response;

    dispatch(actions.requestFailure());

    if (error.response.status === code.BAD_REQUEST) {
      dispatch(actions.badRequest({ status, message }));
    }

    if (error.response.status === code.FORBIDDEN) {
      dispatch(actions.toogleAuthApp());
      history.pushState(null, null, '/login'); // TODO Проверить, что работает
    }

    if (error.response.status === code.NOT_FOUND) {
      dispatch(actions.resourceNotFound({ status, message }));
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export { BASE_URL };

export default createAPI;
