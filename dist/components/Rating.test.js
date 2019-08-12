"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const react_router_dom_1 = require("react-router-dom");
const Rating_1 = require("./Rating");
it('Rating correctly render', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Rating_1.default, { parentClassName: "place-card", rating: 1 }),
        ")")).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Rating.test.js.map