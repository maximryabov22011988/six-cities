import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import SignIn from '../pages/SignIn';

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/signin" component={App} />
      </Router>
    </Provider>
  );
}

export default Root;
