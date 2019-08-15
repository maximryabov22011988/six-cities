'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
('./Re');
it('Reviews correctly render', () => {
  const tree = renderer.create(React.createElement(Reviews, null)).toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Reviews.test.js.map
