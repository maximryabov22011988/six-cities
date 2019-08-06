"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
function Form({ className, action, method, onSubmit, children = null }) {
    return (React.createElement("form", { action: action, className: classnames_1.default(className, 'form'), method: method, onSubmit: onSubmit }, children));
}
exports.default = Form;
//# sourceMappingURL=Form.js.map