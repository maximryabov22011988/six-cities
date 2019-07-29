import * as types from './types';

export const requestReviews = () => ({
  type: types.REQUEST_REVIEWS,
});

export const receiveReviews = (reviews) => ({
  type: types.RECEIVE_REVIEWS,
  payload: reviews,
});

export const addReview = () => ({
  type: types.ADD_REVIEW,
});

export const sendReview = () => ({
  type: types.SEND_REVIEW,
});
