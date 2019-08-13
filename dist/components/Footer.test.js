'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Footer_1 = require('./Footer');
it('Footer correctly render', () => {
  const tree = renderer.create(React.createElement(Footer_1.default, { className: 'footer container' }, null)).toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Footer.test.js.map
