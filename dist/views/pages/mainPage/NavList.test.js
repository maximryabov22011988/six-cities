"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const NavList_1 = require("./NavList");
const city_1 = require("../../mocks/city");
const cities = [city_1.default];
it('NavList renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(NavList_1.default, { cities: cities, currentCity: "Paris", onChangeCity: jest.fn() })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=NavList.test.js.map