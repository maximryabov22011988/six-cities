'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const Logo_1 = require('./Logo');
it('Logo correctly render', () => {
  const logo = react_test_renderer_1.default.create(React.createElement(Logo_1.default, null)).toJSON();
  expect(logo).toMatchSnapshot();
});
//# sourceMappingURL=Logo.test.js.map
