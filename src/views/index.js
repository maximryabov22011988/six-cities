import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './layouts/App';
import store from '../state/store';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.querySelector('#root'));
