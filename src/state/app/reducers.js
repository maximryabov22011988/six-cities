import * as types from './types';
import * as offerTypes from '../offers/types';

const initialState = {
  api: {
    isLoading: false
  },
  auth: {
    user: {},
    isLogin: false,
    isPending: false
  }
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
    case offerTypes.REQUEST_OFFERS: {
      return {
        ...state,
        api: {
          isLoading: true
        }
      };
    }
    case types.REQUEST_FAILURE:
    case offerTypes.RECEIVE_OFFERS: {
      return {
        ...state,
        api: {
          isLoading: false
        }
      };
    }
    case types.RESOURCE_NOT_FOUND: {
      return {
        ...state,
        api: {
          isLoading: false,
          errors: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default app;
