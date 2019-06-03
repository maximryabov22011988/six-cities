import React from 'react';
import PropTypes from 'prop-types';

import MainPage from './pages/MainPage';

const propTypes = {
  placeCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      type: PropTypes.oneOf(['Apartment', 'Private room']),
      rating: PropTypes.number,
      isPremium: PropTypes.bool,
      isBookmark: PropTypes.bool
    })
  ).isRequired
};

function App(props) {
  const { placeCards } = props;
  return <MainPage placeCards={placeCards} />;
}

App.propTypes = propTypes;

export default App;
