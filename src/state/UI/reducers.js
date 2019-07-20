import * as types from './types';

import { sortingName } from '../../views/constants/options';

const UIInitialState = {
  currentCity: null,
  sorting: sortingName.POPULAR,
};

const UI = (state = UIInitialState, action) => {
  console.log(action);
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

export default UI;
