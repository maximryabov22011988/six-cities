"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const react_router_dom_1 = require("react-router-dom");
const PlaceCard_1 = require("./PlaceCard");
const offer_1 = require("../../mocks/offer");
it('PlaceCard correctly render on main page', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(PlaceCard_1.default, { className: "cities", offer: offer_1.default, onActiveOfferClick: jest.fn(), onAddToFavorities: jest.fn(), onRemoveFromFavorities: jest.fn() }))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('PlaceCard of near places correctly render', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(PlaceCard_1.default, { className: "near-places", offer: offer_1.default, onActiveOfferClick: undefined, onAddToFavorities: jest.fn(), onRemoveFromFavorities: jest.fn() }))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('PlaceCard of favorites places correctly render', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(PlaceCard_1.default, { className: "favorites", offer: offer_1.default, onActiveOfferClick: undefined, onAddToFavorities: jest.fn(), onRemoveFromFavorities: jest.fn() }))).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=PlaceCard.test.js.map