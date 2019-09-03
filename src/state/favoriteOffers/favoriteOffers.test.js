import * as types from './types';
import * as actions from './actions';
import reducer, { initialState } from './reducers';
import { getFavoriteOffers } from './selectors';
import nameSpace from '../name-spaces';

import offer from '../../views/mocks/offer';

describe('FavoriteOffers actions', () => {
  it('requestFavoriteOffers', () => {
    expect(actions.requestFavoriteOffers()).toStrictEqual({
      type: types.REQUEST_FAVORITE_OFFERS,
    });
  });

  it('receiveFavoriteOffers', () => {
    expect(actions.receiveFavoriteOffers([])).toStrictEqual({
      type: types.RECEIVE_FAVORITE_OFFERS,
      payload: [],
    });
  });

  it('addOfferToFavorities', () => {
    expect(actions.addOfferToFavorities(1)).toStrictEqual({
      type: types.ADD_OFFER_TO_FAVORITIES,
      payload: 1,
    });
  });

  it('removeOfferFromFavorities', () => {
    expect(actions.removeOfferFromFavorities(1)).toStrictEqual({
      type: types.REMOVE_OFFER_FROM_FAVORITIES,
      payload: 1,
    });
  });
});

describe('FavoriteOffers reducer', () => {
  it('RECEIVE_FAVORITE_OFFERS', () => {
    expect(reducer(initialState, actions.receiveFavoriteOffers([offer]))).toStrictEqual([offer.id]);
  });
  it('ADD_OFFER_TO_FAVORITIES', () => {
    expect(reducer(initialState, actions.addOfferToFavorities(2))).toStrictEqual([2]);
  });
  it('REMOVE_OFFER_FROM_FAVORITIES', () => {
    const initialStateWithOffer = [1];
    expect(reducer(initialStateWithOffer, actions.removeOfferFromFavorities(1))).toStrictEqual([]);
  });
  it('should return initialState', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState);
  });
});

describe('FavoriteOffers selectors', () => {
  describe('getFavoriteOffers', () => {
    it('when state "offers" null should return empty array', () => {
      const state = {
        [nameSpace.OFFERS]: null,
      };
      expect(getFavoriteOffers(state)).toStrictEqual([]);
    });

    it('when state "favoriteOffers" null should return empty array', () => {
      const state = {
        [nameSpace.FAVORITE_OFFERS]: null,
      };
      expect(getFavoriteOffers(state)).toStrictEqual([]);
    });

    it('should return grouped offers', () => {
      const state = {
        [nameSpace.OFFERS]: [offer],
        [nameSpace.FAVORITE_OFFERS]: [offer.id],
      };
      expect(getFavoriteOffers(state)).toStrictEqual({
        [offer.city.name]: [offer],
      });
    });
  });
});
