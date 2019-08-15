'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Button_1 = require('./Button');
it('Button renders correctly with mandatory props', () => {
  const tree = renderer
    .create(React.createElement(Button_1.default, { className: 'login__submit form__submit' }, 'Button'))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Button.test.js.map
