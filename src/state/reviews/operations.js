import * as actions from './actions';
import { code as serverAnswer } from '../../api';

export const loadReviews = (hotelId) => async (dispatch, getState, api) => {
  dispatch(actions.requestReviews());
  const response = await api.get(`/comments/${hotelId}`);
  const reviews = response.data;
  if (reviews) {
    dispatch(actions.receiveReviews(reviews));
  }
};

export const sendReview = (hotelId, review) => async (dispatch, getState, api) => {
  dispatch(actions.addReview());
  dispatch(actions.sendReview());
  const response = await api.post(`/comments/${hotelId}`, review);
  if (response.status === serverAnswer.SUCCESS_REQUEST) {
    dispatch(actions.receiveReviews(response.data));
  }
};
