'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const NavItem_1 = require('./navList/NavItem');
const withActiveItem_1 = require('../../hocs/withActiveItem');
function NavList({ currentCity, cities, onChangeCity }) {
  return React.createElement(
    'ul',
    { className: 'locations__list tabs__list' },
    cities.map((city) => {
      const WrappedNavItem = withActiveItem_1.default(NavItem_1.default);
      return React.createElement(WrappedNavItem, {
        city: city,
        className: 'tabs__item',
        isActive: city.name === currentCity,
        key: city.name,
        onChangeCity: onChangeCity,
      });
    })
  );
}
exports.default = NavList;
//# sourceMappingURL=NavList.js.map
