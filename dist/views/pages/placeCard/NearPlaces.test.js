"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const react_router_dom_1 = require("react-router-dom");
const NearPlaces_1 = require("./NearPlaces");
const offer_1 = require("../../mocks/offer");
const offers = [offer_1.default];
it('NearPlaces renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(NearPlaces_1.default, { offers: offers, onAddToFavorities: jest.fn(), onRemoveFromFavorities: jest.fn() }))).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=NearPlaces.test.js.map