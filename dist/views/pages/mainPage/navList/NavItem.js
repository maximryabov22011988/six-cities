"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
function NavItem({ className, city, onChangeCity }) {
    return (React.createElement("li", { className: "locations__item" },
        React.createElement("a", { className: classnames_1.default(className, 'locations__item-link'), href: "#", onClick: onChangeCity(city) },
            React.createElement("span", null, city.name))));
}
exports.default = NavItem;
//# sourceMappingURL=NavItem.js.map