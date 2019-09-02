import * as types from './types';
import * as offerTypes from '../offers/types';
import * as favoriteOffersTypes from '../favoriteOffers/types';
import * as reviewsTypes from '../reviews/types';

const initialState = {
  isReady: false,
  isLoading: false,
  auth: {
    user: {},
    isSignIn: false,
  },
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
    case offerTypes.RECEIVE_OFFERS:
    case favoriteOffersTypes.RECEIVE_FAVORITE_OFFERS:
    case reviewsTypes.RECEIVE_REVIEWS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.BAD_REQUEST:
    case types.REQUIRE_AUTH:
    case types.RESOURCE_NOT_FOUND: {
      return {
        ...state,
        errors: action.payload,
      };
    }
    case types.REQUEST_SIGN_IN:
    case offerTypes.REQUEST_OFFERS:
    case favoriteOffersTypes.REQUEST_FAVORITE_OFFERS:
    case reviewsTypes.REQUEST_REVIEWS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.RECEIVE_SIGN_IN: {
      const userInfo = action.payload;
      return {
        ...state,
        isLoading: false,
        auth: {
          ...state.auth,
          user: {
            ...state.auth.user,
            ...userInfo,
          },
        },
        errors: {},
      };
    }
    case types.TOOGLE_AUTH_APP: {
      return {
        ...state,
        auth: {
          ...state.auth,
          isSignIn: !state.isSignIn,
        },
      };
    }
    case types.TOOGLE_READY_APP: {
      return {
        ...state,
        isReady: !state.isReady,
      };
    }
    default: {
      return state;
    }
  }
};

export { initialState };

export default app;
