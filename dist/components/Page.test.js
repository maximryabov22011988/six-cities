'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Page_1 = require('./Page');
it('Page correctly render', () => {
  const tree = renderer.create(React.createElement(Page_1.default, null, null)).toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Page.test.js.map
