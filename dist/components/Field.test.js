'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Field_1 = require('./Field');
it('Field correctly render', () => {
  const tree = renderer
    .create(React.createElement(Field_1.Field, { type: 'text', value: 'test', onChange: jest.fn() }))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Field.test.js.map
