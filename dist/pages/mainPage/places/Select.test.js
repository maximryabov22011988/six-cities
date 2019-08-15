'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Select_1 = require('./Select');
const options_1 = require('../../../mocks/options');
it('Select renders correctly with mandatory props', () => {
  const select = renderer
    .create(
      React.createElement(Select_1.default, {
        caption: 'Sort by',
        defaultOption: options_1.defaultId,
        options: options_1.options,
        onChangeSorting: jest.fn(),
      })
    )
    .toJSON();
  expect(select).toMatchSnapshot();
});
//# sourceMappingURL=Select.test.js.map
