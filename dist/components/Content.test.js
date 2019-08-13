'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Content_1 = require('./Content');
it('Content correctly render', () => {
  const tree = renderer
    .create(React.createElement(Content_1.default, { isEmpty: false, parentClassName: 'favorites' }, null))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Content.test.js.map
