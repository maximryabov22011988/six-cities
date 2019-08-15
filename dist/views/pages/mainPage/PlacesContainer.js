"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
function PlacesContainer({ isEmpty, leftPanel = null, rightPanel = null }) {
    return (React.createElement("div", { className: "cities__places-wrapper" },
        React.createElement("div", { className: classnames_1.default('cities__places-container container', isEmpty && 'cities__places-container--empty') },
            leftPanel,
            React.createElement("div", { className: "cities__right-section" }, !isEmpty && React.createElement("section", { className: "cities__map map" }, rightPanel)))));
}
exports.default = PlacesContainer;
//# sourceMappingURL=PlacesContainer.js.map