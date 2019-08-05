'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
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
  return React.createElement(
    'div',
    { className: `${parentClassName}__rating rating` },
    React.createElement(
      'div',
      { className: `${parentClassName}__stars rating__stars` },
      React.createElement('span', { style: getRatingStyles(rating) }),
      React.createElement('span', { className: 'visually-hidden' }, 'Rating')
    ),
    isShowValue && React.createElement('span', { className: `${parentClassName}__rating-value rating__value` }, rating)
  );
}
Rating.propTypes = propTypes;
exports.default = Rating;
//# sourceMappingURL=Rating.js.map
