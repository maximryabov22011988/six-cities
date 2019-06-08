import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  rating: PropTypes.number.isRequired
};

const MAX_RATING = 5;

const getRatingStyles = (rating) => {
  const ratingInPercent = (rating / MAX_RATING) * 100;
  return {
    width: `${ratingInPercent.toFixed(2)}%`
  };
};

function Rating(props) {
  const { rating } = props;

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={getRatingStyles(rating)} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

Rating.propTypes = propTypes;

export default Rating;
