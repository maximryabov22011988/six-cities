"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const SignInForm_1 = require("./SignInForm");
it('SignInForm renders correctly with mandatory props', () => {
    const tree = renderer.create(React.createElement(SignInForm_1.default, { onSignIn: jest.fn() })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=SignInForm.test.js.map