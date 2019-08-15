"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const react_router_dom_1 = require("react-router-dom");
const MainPage_1 = require("./MainPage");
const Map_1 = require("../components/Map");
const offer_1 = require("../mocks/offer");
const user_1 = require("../mocks/user");
const city_1 = require("../mocks/city");
const offers = [offer_1.default];
const cities = [city_1.default];
it('MainPage renders correctly with mandatory props', () => {
    Map_1.default.prototype.componentDidMount = jest.fn();
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(MainPage_1.default, { addOfferToFavorities: jest.fn(), changeCity: jest.fn(), changeSorting: jest.fn(), cities: cities, currentCity: city_1.default, isAuthUser: true, offers: offers, removeOfferFromFavorities: jest.fn(), user: user_1.default }))).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=MainPage.test.js.map