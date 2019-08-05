'use strict';
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_router_dom_1 = require('react-router-dom');
const propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};
function PrivateRoute(_a) {
  var { component: Component, isAuth } = _a,
    rest = __rest(_a, ['component', 'isAuth']);
  return React.createElement(
    react_router_dom_1.Route,
    Object.assign({}, rest, {
      render: (props) =>
        isAuth
          ? React.createElement(Component, Object.assign({}, props))
          : React.createElement(react_router_dom_1.Redirect, { to: '/login' }),
    })
  );
}
PrivateRoute.propTypes = propTypes;
exports.default = PrivateRoute;
//# sourceMappingURL=PrivateRoute.js.map
