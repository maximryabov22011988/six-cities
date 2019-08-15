"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const react_router_dom_1 = require("react-router-dom");
const PlaceCardList_1 = require("./PlaceCardList");
const offer_1 = require("../mocks/offer");
const offers = [offer_1.default];
it('List of places correctly render on main page', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(PlaceCardList_1.default, { offers: offers, parentClassName: "cities", onActiveOfferClick: jest.fn(), onAddToFavorities: jest.fn(), onRemoveFromFavorities: jest.fn() }))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('List of favorites places correctly render', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(PlaceCardList_1.default, { offers: offers, parentClassName: "favorites", onAddToFavorities: jest.fn(), onRemoveFromFavorities: jest.fn() }))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('List of near places correctly render', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(PlaceCardList_1.default, { offers: offers, parentClassName: "near-places", onAddToFavorities: jest.fn(), onRemoveFromFavorities: jest.fn() }))).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=PlaceCardList.test.js.map