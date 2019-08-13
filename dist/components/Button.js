'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
function Button({ className, type = 'button', disabled, children, onClick }) {
  return React.createElement(
    'button',
    { className: classnames_1.default(className, 'button'), disabled: disabled, type: type, onClick: onClick },
    children
  );
}
exports.default = Button;
//# sourceMappingURL=Button.js.map
