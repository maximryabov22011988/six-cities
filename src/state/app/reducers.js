import * as types from './types';
import * as offerTypes from '../offers/types';

const initialState = {
  isReady: false,
  isLoading: false,
  api: {},
  auth: {
    user: {},
    isSignIn: false
  }
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
    case offerTypes.RECEIVE_OFFERS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case types.BAD_REQUEST:
    case types.RESOURCE_NOT_FOUND: {
      return {
        ...state,
        errors: action.payload
      };
    }
    case types.REQUEST_SIGN_IN:
    case offerTypes.REQUEST_OFFERS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case types.RECEIVE_SIGN_IN: {
      const userInfo = action.payload;
      return {
        ...state,
        auth: {
          ...state.auth,
          user: {
            ...state.auth.user,
            ...userInfo
          }
        }
      };
    }
    case types.TOOGLE_AUTH_APP: {
      return {
        ...state,
        auth: {
          ...state.auth,
          isSignIn: !state.isSignIn
        }
      };
    }
    case types.TOOGLE_READY_APP: {
      return {
        ...state,
        isReady: !state.isReady
      };
    }
    default: {
      return state;
    }
  }
};

export default app;
