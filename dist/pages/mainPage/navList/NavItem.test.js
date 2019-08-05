'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const NavItem_1 = require('./NavItem');
const cityMock = {
  name: 'Cologne',
  location: [50.938361, 6.959974],
  zoom: 13,
};
it('NavItem correctly render', () => {
  const handleChangeCity = jest.fn();
  const navItem = react_test_renderer_1.default
    .create(
      React.createElement(NavItem_1.default, {
        city: cityMock,
        className: 'tabs__item',
        onChangeCity: handleChangeCity,
      })
    )
    .toJSON();
  expect(navItem).toMatchSnapshot();
});
//# sourceMappingURL=NavItem.test.js.map
