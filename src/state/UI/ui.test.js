import * as types from './types';
import * as actions from './actions';
import reducer, { initialState } from './reducers';
import { getOffersBySorting } from './selectors';
import nameSpace from '../name-spaces';

import currentCity from '../../views/mocks/currentCity';
import offer from '../../views/mocks/offer';

describe('UI actions', () => {
  it('changeCity', () => {
    expect(actions.changeCity(currentCity)).toStrictEqual({
      type: types.CHANGE_CITY,
      payload: currentCity,
    });
  });

  it('changeSorting', () => {
    expect(actions.changeSorting('Popular')).toStrictEqual({
      type: types.CHANGE_SORTING,
      payload: 'Popular',
    });
  });
});

describe('UI reducer', () => {
  it('CHANGE_CITY', () => {
    expect(reducer(initialState, actions.changeCity(currentCity))).toStrictEqual({ ...initialState, currentCity });
  });

  it('CHANGE_SORTING', () => {
    expect(reducer(initialState, actions.changeSorting('Top rated first'))).toStrictEqual({
      ...initialState,
      sorting: 'Top rated first',
    });
  });

  it('should return initialState', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState);
  });
});

describe('UI selectors', () => {
  describe('getOffersBySorting', () => {
    it('when state "sorting" null should return empty array', () => {
      const state = {
        [nameSpace.UI]: {
          sorting: null,
        },
      };
      expect(getOffersBySorting(state)).toStrictEqual([]);
    });

    it('should return sorting offers by price', () => {
      const offer1 = {
        ...offer,
        price: 100,
      };
      const offer2 = {
        ...offer,
        id: 2,
        price: 150,
      };
      const state = {
        [nameSpace.OFFERS]: {
          [offer1.id]: offer1,
          [offer2.id]: offer2,
        },
        [nameSpace.UI]: {
          currentCity: {
            name: offer.city.name,
            location: [50.938361, 6.959974],
            zoom: 13,
          },
          sorting: 'Price: high to low',
        },
      };
      expect(getOffersBySorting(state)).toStrictEqual([offer2, offer1]);
    });
  });
});
