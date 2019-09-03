import * as types from './types';

import { sortingName } from '../../views/constants/options';

const initialState = {
  currentCity: null,
  sorting: sortingName.POPULAR,
};

const UI = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CITY: {
      return {
        ...state,
        currentCity: action.payload,
      };
    }
    case types.CHANGE_SORTING: {
      return {
        ...state,
        sorting: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export { initialState };

export default UI;
