'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Nav_1 = require('./Nav');
it('Nav renders correctly with mandatory props', () => {
  const tree = renderer.create(React.createElement(Nav_1.default, null, null)).toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Nav.test.js.map
