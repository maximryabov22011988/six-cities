'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const Rating_1 = require('./Rating');
it('Rating correctly render', () => {
  const rating = react_test_renderer_1.default.create(React.createElement(Rating_1.default, { rating: 1 })).toJSON();
  expect(rating).toMatchSnapshot();
});
//# sourceMappingURL=Rating.test.js.map
