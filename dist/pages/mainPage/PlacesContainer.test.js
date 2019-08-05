'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const PlacesContainer_1 = require('./PlacesContainer');
it('PlacesContainer correctly render', () => {
  const placesContainer = react_test_renderer_1.default
    .create(React.createElement(PlacesContainer_1.default, null))
    .toJSON();
  expect(placesContainer).toMatchSnapshot();
});
//# sourceMappingURL=PlacesContainer.test.js.map
