import * as offerActions from '../offers/actions';
import * as appActions from './actions';
import * as UIActions from '../UI/actions';

import { loadOffers } from '../offers/operations';

export const init = () => async dispatch => {
  const response = await dispatch(loadOffers());
  const offers = response.data;

  if (offers) {
    const initialCity = offers[0].city;
    const city = {
      name: initialCity.name,
      location: [initialCity.location.latitude, initialCity.location.longitude],
      zoom: initialCity.location.zoom
    };

    dispatch(offerActions.receiveOffers(offers));
    dispatch(UIActions.changeCity(city));
    dispatch(appActions.toogleReadyApp());
  }
};

export const signIn = (email, password) => async (dispatch, getState, api) => {
  dispatch(appActions.requestSignIn());
  const response = await api.post('/login', { email, password });
  const user = response.data;
  if (user) {
    dispatch(appActions.toogleAuthApp());
    dispatch(appActions.receiveSignIn(user));
  }
};
