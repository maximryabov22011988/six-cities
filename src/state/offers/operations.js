import * as actions from './actions';
import * as UIActions from '../UI/actions';

export const loadOffers = () => (dispatch, getState, api) => {
  dispatch(actions.requestOffers());
  return api.get('/hotels').then(response => {
    if (response && response.data) {
      const offers = response.data;
      const firstCity = offers[0].city;
      const initialCity = {
        name: firstCity.name,
        location: [firstCity.location.latitude, firstCity.location.longitude],
        zoom: firstCity.location.zoom
      };
      dispatch(actions.receiveOffers(offers));
      dispatch(UIActions.changeCity(initialCity));
    }
  });
};
