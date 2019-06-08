import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './pages/MainPage';

import offers from './mocks/offers';

function App() {
  return <MainPage offers={offers} />;
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
