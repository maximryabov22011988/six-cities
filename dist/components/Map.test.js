'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const Map_1 = require('./Map');
const offersMock = [
  {
    city: {
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
  },
];
it(`Map correctly render`, () => {
  Map_1.default.prototype.componentDidMount = jest.fn();
  const map = react_test_renderer_1.default.create(React.createElement(Map_1.default, { offers: offersMock })).toJSON();
  expect(map).toMatchSnapshot();
});
//# sourceMappingURL=Map.test.js.map
