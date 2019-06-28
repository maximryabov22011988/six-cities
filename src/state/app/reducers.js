import * as types from './types';

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
    case types.REQUEST_OFFERS: {
      return {
        ...state,
        api: {
          isLoading: true
        }
      };
    }
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
    case types.RECEIVE_OFFERS: {
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
