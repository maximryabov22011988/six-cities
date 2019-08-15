"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const react_router_dom_1 = require("react-router-dom");
const Logo_1 = require("./Logo");
it('Logo renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Logo_1.default, { position: "header" }))).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Logo.test.js.map