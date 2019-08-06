"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
function Content({ isEmpty, parentClassName, children = null }) {
    const mainClasses = classnames_1.default('page__main', parentClassName && `page__main--${parentClassName}`, isEmpty && parentClassName === 'favorites' && `page__main--${parentClassName}-empty`);
    const containerClasses = classnames_1.default('container', parentClassName && `page__${parentClassName}-container`);
    const sectionClasses = classnames_1.default(parentClassName, isEmpty && parentClassName === 'favorites' && `${parentClassName}--empty`);
    return (React.createElement("main", { className: mainClasses },
        React.createElement("div", { className: containerClasses },
            React.createElement("section", { className: sectionClasses }, children))));
}
exports.default = Content;
//# sourceMappingURL=Content.js.map