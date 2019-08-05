'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const ReviewItem_1 = require('./ReviewItem');
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
  return React.createElement(
    'ul',
    { className: 'reviews__list' },
    reviews.map((review, i) => {
      if (i < REVIEWS_MAX) {
        return React.createElement(ReviewItem_1.default, { key: review.id, review: review });
      }
      return null;
    })
  );
}
ReviewList.propTypes = propTypes;
exports.default = ReviewList;
//# sourceMappingURL=ReviewList.js.map
