'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
const propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
  }).isRequired,
  className: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};
function NavItem({ className, city, onChangeCity }) {
  return React.createElement(
    'li',
    { className: 'locations__item' },
    React.createElement(
      'a',
      { className: classnames_1.default(className, 'locations__item-link'), href: '#', onClick: onChangeCity(city) },
      React.createElement('span', null, city.name)
    )
  );
}
NavItem.propTypes = propTypes;
exports.default = NavItem;
//# sourceMappingURL=NavItem.js.map
