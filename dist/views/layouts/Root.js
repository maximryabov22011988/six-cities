"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
const store_1 = require("../../state/store");
function Root() {
    return (React.createElement(react_redux_1.Provider, { store: store_1.default },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(App_1.default, null))));
}
exports.default = Root;
//# sourceMappingURL=Root.js.map