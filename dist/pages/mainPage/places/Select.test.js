'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const Select_1 = require('./Select');
const optionsMock = [{ id: 1, name: 'Popular' }];
const defaultOptionId = 1;
it('Select correctly render', () => {
  const select = react_test_renderer_1.default
    .create(
      React.createElement(Select_1.default, {
        caption: 'Sort by',
        defaultOption: defaultOptionId,
        options: optionsMock,
      })
    )
    .toJSON();
  expect(select).toMatchSnapshot();
});
//# sourceMappingURL=Select.test.js.map
