"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const NavItem_1 = require("./NavItem");
const city_1 = require("../../../mocks/city");
it('NavItem renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(NavItem_1.default, { city: city_1.default, className: "tabs__item", onChangeCity: jest.fn() })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=NavItem.test.js.map