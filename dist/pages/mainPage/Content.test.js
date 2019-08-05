'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const Content_1 = require('./Content');
it('Content correctly render', () => {
  const content = react_test_renderer_1.default.create(React.createElement(Content_1.default, null)).toJSON();
  expect(content).toMatchSnapshot();
});
//# sourceMappingURL=Content.test.js.map
