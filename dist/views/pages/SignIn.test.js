"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const react_router_dom_1 = require("react-router-dom");
const SignIn_1 = require("./SignIn");
it('SignIn renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(SignIn_1.default, { onSignIn: jest.fn() })))
        .toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=SignIn.test.js.map