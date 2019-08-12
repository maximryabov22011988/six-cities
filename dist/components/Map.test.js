'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Map_1 = require('./Map');
const offer_1 = require('../mocks/offer');
const offers = [offer_1.default];
it(`Map correctly render`, () => {
  Map_1.default.prototype.componentDidMount = jest.fn();
  const tree = renderer.create(React.createElement(Map_1.default, { offers: offers })).toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Map.test.js.map
