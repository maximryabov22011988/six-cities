'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Label_1 = require('./Label');
it('Label correctly render', () => {
  const tree = renderer
    .create(React.createElement(Label_1.default, { isShow: true, name: 'Premium', parentClassName: 'place-card' }))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Label.test.js.map
