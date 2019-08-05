'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const propTypes = {
  city: PropTypes.string,
};
function EmptyPlaces({ city }) {
  return React.createElement(
    'section',
    { className: 'cities__no-places' },
    React.createElement(
      'div',
      { className: 'cities__status-wrapper tabs__content' },
      React.createElement('b', { className: 'cities__status' }, 'No places to stay available'),
      React.createElement(
        'p',
        { className: 'cities__status-description' },
        'We could not find any property availbale at the moment in ',
        city
      )
    )
  );
}
EmptyPlaces.propTypes = propTypes;
exports.default = EmptyPlaces;
//# sourceMappingURL=EmptyPlaces.js.map
