import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  parentClassName: PropTypes.string,
  rating: PropTypes.number.isRequired,
  showValue: PropTypes.bool
};

const MAX_RATING = 5;

const getRatingStyles = rating => {
  const ratingInPercent = (rating / MAX_RATING) * 100;
  return {
    width: `${ratingInPercent.toFixed(2)}%`
  };
};

function Rating({ parentClassName, rating, showValue }) {
  return (
    <div className={`${parentClassName}__rating rating`}>
      <div className={`${parentClassName}__stars rating__stars`}>
        <span style={getRatingStyles(rating)} />
        <span className="visually-hidden">Rating</span>
      </div>
      {showValue && (
        <span className={`${parentClassName}__rating-value rating__value`}>
          {rating}
        </span>
      )}
    </div>
  );
}

Rating.propTypes = propTypes;

export default Rating;
