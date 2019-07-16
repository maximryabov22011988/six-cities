import * as actions from './actions';

export const loadReviews = (hotelId) => async (dispatch, getState, api) => {
  dispatch(actions.requestReviews());
  const response = await api.get(`/comments/${hotelId}`);
  const reviews = response.data;
  if (reviews) {
    dispatch(actions.receiveReviews(reviews));
  }
};
