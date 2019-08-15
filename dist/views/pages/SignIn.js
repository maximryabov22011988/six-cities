"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Page_1 = require("../components/Page");
const Header_1 = require("../components/Header");
const Logo_1 = require("../components/Logo");
const Content_1 = require("../components/Content");
const SignInForm_1 = require("./signIn/SignInForm");
function SignIn({ onSignIn }) {
    return (React.createElement(Page_1.default, { parentClassName: "login" },
        React.createElement(Header_1.default, { logo: React.createElement(Logo_1.default, { position: "header" }) }),
        React.createElement(Content_1.default, { parentClassName: "login" },
            React.createElement(SignInForm_1.default, { onSignIn: onSignIn }))));
}
exports.default = SignIn;
//# sourceMappingURL=SignIn.js.map