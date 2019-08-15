'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Header_1 = require('./Header');
it('Header renders correctly with mandatory props', () => {
  const tree = renderer.create(React.createElement(Header_1.default, { logo: null, userInfo: null })).toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Header.test.js.map
