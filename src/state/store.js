import { createStore } from 'redux';

import offers from './offers';

const rootReducer = offers;
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
