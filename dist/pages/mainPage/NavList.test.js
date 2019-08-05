'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const NavList_1 = require('./NavList');
const currentCityMock = {
  name: 'Cologne',
  location: [50.938361, 6.959974],
};
const citiesMock = [
  {
    name: 'Cologne',
    location: [50.938361, 6.959974],
    zoom: 13,
  },
];
it('NavList correctly render', () => {
  const handleChangeCity = jest.fn();
  const navList = react_test_renderer_1.default
    .create(
      React.createElement(NavList_1.default, {
        cities: citiesMock,
        currentCity: currentCityMock.name,
        onChangeCity: handleChangeCity,
      })
    )
    .toJSON();
  expect(navList).toMatchSnapshot();
});
//# sourceMappingURL=NavList.test.js.map
