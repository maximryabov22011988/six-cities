import * as types from './types';

const UIInitialState = {
  currentCity: null,
  filter: '',
  sorting: ''
};

const UI = (state = UIInitialState, action) => {
  switch (action.type) {
    case types.CHANGE_CITY: {
      return {
        ...state,
        currentCity: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default UI;
