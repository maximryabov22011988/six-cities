'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const Image_1 = require('./Image');
it('Image renders correctly with mandatory props', () => {
  const tree = renderer
    .create(React.createElement(Image_1.default, { height: '100', src: '/img', width: '100' }))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Image.test.js.map
