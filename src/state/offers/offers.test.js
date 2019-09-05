import * as types from './types';
import * as actions from './actions';
import reducer, { initialState } from './reducers';
import * as selectors from './selectors';
import nameSpace from '../name-spaces';

import offer from '../../views/mocks/offer';
import city from '../../views/mocks/city';

describe('Offers actions', () => {
  it('requestOffers', () => {
    expect(actions.requestOffers()).toStrictEqual({
      type: types.REQUEST_OFFERS,
    });
  });

  it('receiveOffers', () => {
    expect(actions.receiveOffers([offer])).toStrictEqual({
      type: types.RECEIVE_OFFERS,
      payload: [offer],
    });
  });

  it('updateOffers', () => {
    expect(actions.updateOffers(offer)).toStrictEqual({
      type: types.UPDATE_OFFERS,
      payload: offer,
    });
  });
});

describe('Offers reducer', () => {
  it('RECEIVE_OFFERS', () => {
    expect(reducer(initialState, actions.receiveOffers([offer]))).toStrictEqual({ ...initialState, [offer.id]: offer });
  });

  it('UPDATE_OFFERS', () => {
    expect(reducer(initialState, actions.updateOffers(offer))).toStrictEqual({
      ...initialState,
      [offer.id]: offer,
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState);
  });
});
