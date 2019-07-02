import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { compose } from 'recompose';

import createAPI from '../api/api';
import nameSpace from './name-spaces';
import offersReducer from './offers';
import appReducer from './app';
import UIReducer from './UI';

/* eslint-disable */
const api = createAPI((...args) => store.dispatch(...args));
const rootReducer = combineReducers({
  [nameSpace.OFFERS]: offersReducer,
  [nameSpace.APP]: appReducer,
  [nameSpace.UI]: UIReducer
});

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(logger),
    reduxDevtools && reduxDevtools()
  )
);
/* eslint-enable */

export default store;
