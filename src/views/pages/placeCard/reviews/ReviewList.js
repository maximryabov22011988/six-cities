import React from 'react';
import PropTypes from 'prop-types';

import ReviewItem from './ReviewItem';

const propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user: PropTypes.shape({
        id: PropTypes.number,
        is_pro: PropTypes.bool,
        name: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      rating: PropTypes.number,
      comment: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};

const REVIEWS_MAX = 10;

function ReviewList({ reviews }) {
  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => {
        if (i < REVIEWS_MAX) {
          return <ReviewItem key={review.id} review={review} />;
        }
        return null;
      })}
    </ul>
  );
}

ReviewList.propTypes = propTypes;

export default ReviewList;
