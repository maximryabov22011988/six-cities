import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { compose } from 'recompose';

import createAPI from '../api/api';
// import app from './app';
// import user from './user';
import offers from './offers';

/* eslint-disable no-underscore-dangle */
const api = createAPI((...args) => store.dispatch(...args));
const rootReducer = offers;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
/* eslint-enable */

export default store;
