"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const react_router_dom_1 = require("react-router-dom");
const FavoriteList_1 = require("./FavoriteList");
const offer_1 = require("../mocks/offer");
const user_1 = require("../mocks/user");
const offers = {
    [offer_1.default.city.name]: [offer_1.default],
};
describe('FavoriteList', () => {
    it('renders correctly with offers', () => {
        const tree = renderer
            .create(React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(FavoriteList_1.default, { isAuthUser: true, isEmpty: false, offers: offers, user: user_1.default, onAddOfferToFavorities: jest.fn(), onRemoveOfferFromFavorities: jest.fn() })))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly without offers', () => {
        const tree = renderer
            .create(React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(FavoriteList_1.default, { isAuthUser: true, isEmpty: true, offers: [], user: user_1.default, onAddOfferToFavorities: jest.fn(), onRemoveOfferFromFavorities: jest.fn() })))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=FavoriteList.test.js.map