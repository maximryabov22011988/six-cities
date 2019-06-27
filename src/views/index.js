import React from 'react';
import ReactDOM from 'react-dom';

import Root from './layouts/Root';
import store from '../state/store';

ReactDOM.render(<Root store={store} />, document.querySelector('#root'));
