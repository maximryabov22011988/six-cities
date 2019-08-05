import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isShowValue: PropTypes.bool,
  parentClassName: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

const MAX_RATING = 5;

const getRatingStyles = (rating) => {
  const ratingInPercent = (rating / MAX_RATING) * 100;
  return {
    width: `${ratingInPercent.toFixed(2)}%`,
  };
};

function Rating({ parentClassName, rating, isShowValue }) {
  return (
    <div className={`${parentClassName}__rating rating`}>
      <div className={`${parentClassName}__stars rating__stars`}>
        <span style={getRatingStyles(rating)} />
        <span className="visually-hidden">Rating</span>
      </div>
      {isShowValue && <span className={`${parentClassName}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}

Rating.propTypes = propTypes;

export default Rating;
