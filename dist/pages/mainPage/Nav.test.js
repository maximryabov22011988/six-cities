'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const Nav_1 = require('./Nav');
it('Nav correctly render', () => {
  const nav = react_test_renderer_1.default.create(React.createElement(Nav_1.default, null)).toJSON();
  expect(nav).toMatchSnapshot();
});
//# sourceMappingURL=Nav.test.js.map
