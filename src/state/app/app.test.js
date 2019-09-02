import * as types from './types';

import * as actions from './actions';
import * as offerActions from '../offers/actions';
import * as favoriteOffersActions from '../favoriteOffers/actions';
import * as reviewsActions from '../reviews/actions';

import reducer, { initialState } from './reducers';

import * as selectors from './selectors';

import nameSpace from '../name-spaces';

describe('App actions', () => {
  it('should be requestSuccess', () => {
    expect(actions.requestSuccess()).toStrictEqual({
      type: types.REQUEST_SUCCESS,
    });
  });

  it('should be requestFailure', () => {
    expect(actions.requestFailure()).toStrictEqual({
      type: types.REQUEST_FAILURE,
    });
  });

  it('should be badRequest', () => {
    expect(actions.badRequest('Error message')).toStrictEqual({
      type: types.BAD_REQUEST,
      payload: 'Error message',
    });
  });

  it('should be requireAuth', () => {
    expect(actions.requireAuth('Error message')).toStrictEqual({
      type: types.REQUIRE_AUTH,
      payload: 'Error message',
    });
  });

  it('should be resourceNotFound', () => {
    expect(actions.resourceNotFound('Error message')).toStrictEqual({
      type: types.RESOURCE_NOT_FOUND,
      payload: 'Error message',
    });
  });

  it('should be requestSignIn', () => {
    expect(actions.requestSignIn()).toStrictEqual({
      type: types.REQUEST_SIGN_IN,
    });
  });

  it('should be toogleAuthApp', () => {
    expect(actions.toogleAuthApp()).toStrictEqual({
      type: types.TOOGLE_AUTH_APP,
    });
  });

  it('should be toogleReadyApp', () => {
    expect(actions.toogleReadyApp()).toStrictEqual({
      type: types.TOOGLE_READY_APP,
    });
  });
});

describe('App reducer', () => {
  it('state "isLoading" should be false', () => {
    const initialStateWithLoading = {
      ...initialState,
      isLoading: true,
    };
    expect(reducer(initialStateWithLoading, actions.requestSuccess())).toStrictEqual({
      ...initialState,
      isLoading: false,
    });
    expect(reducer(initialStateWithLoading, actions.requestFailure())).toStrictEqual({
      ...initialState,
      isLoading: false,
    });
    expect(reducer(initialStateWithLoading, offerActions.receiveOffers())).toStrictEqual({
      ...initialState,
      isLoading: false,
    });
    expect(reducer(initialStateWithLoading, favoriteOffersActions.receiveFavoriteOffers())).toStrictEqual({
      ...initialState,
      isLoading: false,
    });
    expect(reducer(initialStateWithLoading, reviewsActions.receiveReviews())).toStrictEqual({
      ...initialState,
      isLoading: false,
    });
  });
  it('state "isLoading" should be true', () => {
    const initialStateWithoutLoading = {
      ...initialState,
      isLoading: false,
    };
    expect(reducer(initialStateWithoutLoading, actions.requestSignIn())).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
    expect(reducer(initialStateWithoutLoading, offerActions.requestOffers())).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
    expect(reducer(initialStateWithoutLoading, favoriteOffersActions.requestFavoriteOffers())).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
    expect(reducer(initialStateWithoutLoading, reviewsActions.requestReviews())).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it('state "errors" should contain error message', () => {
    const initialStateWithoutErrors = {
      ...initialState,
      errors: {},
    };
    expect(reducer(initialStateWithoutErrors, actions.badRequest('Error message'))).toStrictEqual({
      ...initialState,
      errors: 'Error message',
    });
    expect(reducer(initialStateWithoutErrors, actions.requireAuth('Error message'))).toStrictEqual({
      ...initialState,
      errors: 'Error message',
    });
    expect(reducer(initialStateWithoutErrors, actions.resourceNotFound('Error message'))).toStrictEqual({
      ...initialState,
      errors: 'Error message',
    });
  });
  it('state "isSignIn" should be true', () => {
    const initialStateWithoutSignIn = {
      ...initialState,
      auth: {
        ...initialState.auth,
        isSignIn: false,
      },
    };
    expect(reducer(initialStateWithoutSignIn, actions.toogleAuthApp())).toStrictEqual({
      ...initialState,
      auth: {
        ...initialState.auth,
        isSignIn: true,
      },
    });
  });
  it('state "isReady" should be true', () => {
    const initialStateWithoutReady = {
      ...initialState,
      isReady: false,
    };
    expect(reducer(initialStateWithoutReady, actions.toogleReadyApp())).toStrictEqual({
      ...initialState,
      isReady: true,
    });
  });
  it('should return initialState', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState);
  });
});

describe('App selectors', () => {
  it('getIsReady should return boolean', () => {
    const state = {
      [nameSpace.APP]: {
        isReady: false,
      },
    };
    expect(selectors.getIsReady(state)).toBeFalsy();
  });
  it('getIsAuth should return boolean', () => {
    const state = {
      [nameSpace.APP]: {
        auth: {
          isSignIn: false,
        },
      },
    };
    expect(selectors.getIsAuth(state)).toBeFalsy();
  });
  it('getUser should return object with info', () => {
    const state = {
      [nameSpace.APP]: {
        auth: {
          user: {
            avatar_url: '/static/avatar/8.jpg',
            email: 'Oliver.conner@gmail.com',
            id: 1,
            is_pro: false,
            name: 'Oliver.conner',
          },
        },
      },
    };
    expect(selectors.getUser(state)).toStrictEqual({
      avatar_url: '/static/avatar/8.jpg',
      email: 'Oliver.conner@gmail.com',
      id: 1,
      is_pro: false,
      name: 'Oliver.conner',
    });
  });
});
