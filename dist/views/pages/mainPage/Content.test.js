'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Content_1 = require('./Content');
it('Content renders correctly with mandatory props', () => {
  const tree = renderer.create(React.createElement(Content_1.default, { isEmpty: false }, null)).toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Content.test.js.map
