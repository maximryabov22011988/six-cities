import * as appActions from './actions';
import * as UIActions from '../UI/actions';

import { loadOffers } from '../offers/operations';
import { loadFavoriteOffers } from '../favoriteOffers/operations';

export const init = () => async (dispatch) => {
  const offers = await dispatch(loadOffers());

  if (offers) {
    const initialCity = offers[0].city;
    const city = {
      name: initialCity.name,
      location: [initialCity.location.latitude, initialCity.location.longitude],
      zoom: initialCity.location.zoom,
    };

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
    dispatch(loadFavoriteOffers());
  }
};
