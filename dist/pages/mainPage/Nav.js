"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function Nav({ children = null }) {
    return (React.createElement("div", { className: "cities tabs" },
        React.createElement("section", { className: "locations container" }, children)));
}
exports.default = Nav;
//# sourceMappingURL=Nav.js.map