"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactRouterDOM = require("react-router-dom");
const Route = ReactRouterDOM.Route;
const Redirect = ReactRouterDOM.Redirect;
function PrivateRoute(_a) {
    var { component: Component, isAuth } = _a, rest = __rest(_a, ["component", "isAuth"]);
    return (React.createElement(Route, Object.assign({}, rest, { render: (routeProps) => (isAuth ? React.createElement(Component, Object.assign({}, routeProps)) : React.createElement(Redirect, { to: "/login" })) })));
}
exports.default = PrivateRoute;
//# sourceMappingURL=PrivateRoute.js.map