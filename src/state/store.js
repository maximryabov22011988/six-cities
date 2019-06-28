import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { compose } from 'recompose';

import createAPI from '../api/api';

import offers from './offers';
import app from './app';
// import UI from './UI';

/* eslint-disable no-underscore-dangle */
const api = createAPI((...args) => store.dispatch(...args));
const rootReducer = combineReducers({ ...offers, app });

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
