import * as types from './types';
import * as actions from './actions';
import reducer, { initialState } from './reducers';
import { getReviews } from './selectors';
import nameSpace from '../name-spaces';

import review from '../../views/mocks/review';

describe('Reviews actions', () => {
  it('requestReviews', () => {
    expect(actions.requestReviews()).toStrictEqual({
      type: types.REQUEST_REVIEWS,
    });
  });

  it('receiveReviews', () => {
    expect(actions.receiveReviews(review)).toStrictEqual({
      type: types.RECEIVE_REVIEWS,
      payload: review,
    });
  });

  it('addReview', () => {
    expect(actions.addReview()).toStrictEqual({
      type: types.ADD_REVIEW,
    });
  });

  it('sendReview', () => {
    expect(actions.sendReview()).toStrictEqual({
      type: types.SEND_REVIEW,
    });
  });
});

describe('Reviews reducer', () => {
  it('REQUEST_REVIEWS', () => {
    const initialStateWithReview = {
      [review.id]: review,
    };
    expect(reducer(initialStateWithReview, actions.requestReviews())).toStrictEqual(initialState);
  });

  it('RECEIVE_REVIEWS', () => {
    expect(reducer({}, actions.receiveReviews([review]))).toStrictEqual({ [review.id]: review });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState);
  });
});

describe('Reviews selectors', () => {
  describe('getReviews', () => {
    it('when state "reviews" null should return empty array', () => {
      const state = {
        [nameSpace.REVIEWS]: null,
      };
      expect(getReviews(state)).toStrictEqual([]);
    });

    it('should return ordered reviews', () => {
      const review1 = {
        ...review,
        date: '2019-05-05T14:13:56.569Z',
      };
      const review2 = {
        ...review,
        id: 2,
        date: '2019-05-10T14:13:56.569Z',
      };
      const state = {
        [nameSpace.REVIEWS]: {
          [review1.id]: review1,
          [review2.id]: review2,
        },
      };
      expect(getReviews(state)).toStrictEqual([review2, review1]);
    });
  });
});
