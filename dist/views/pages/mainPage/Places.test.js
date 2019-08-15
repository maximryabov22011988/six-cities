'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const react_router_dom_1 = require('react-router-dom');
const Places_1 = require('./Places');
const offer_1 = require('../../mocks/offer');
const offers = [offer_1.default];
it('Places renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      React.createElement(
        react_router_dom_1.BrowserRouter,
        null,
        React.createElement(Places_1.default, {
          offers: offers,
          searchResultText: '1 places to stay in Paris',
          onActiveOfferClick: jest.fn(),
          onAddToFavorities: jest.fn(),
          onChangeSorting: jest.fn(),
          onRemoveFromFavorities: jest.fn(),
        })
      )
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Places.test.js.map
