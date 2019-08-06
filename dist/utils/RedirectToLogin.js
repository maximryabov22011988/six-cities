"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const lodash_1 = require("lodash");
const api_1 = require("../../api");
/* eslint-disable */
class RedirectToLogin extends React.Component {
    render() {
        const { isRequireAuth } = this.props;
        if (isRequireAuth) {
            return React.createElement(react_router_dom_1.Redirect, { to: "/login" });
        }
        return null;
    }
}
/* eslint-disable */
const mapStateToProps = (state) => ({
    isRequireAuth: lodash_1.get(state, 'app.errors.status', null) === api_1.code.REQUIRE_AUTH,
});
exports.default = react_redux_1.connect(mapStateToProps)(RedirectToLogin);
//# sourceMappingURL=RedirectToLogin.js.map