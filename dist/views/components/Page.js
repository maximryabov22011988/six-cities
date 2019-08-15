'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
function Page({ className, parentClassName, children }) {
  const classes = classnames_1.default(className, parentClassName && `page page--gray page--${parentClassName}`);
  return React.createElement('div', { className: classes }, children);
}
exports.default = Page;
//# sourceMappingURL=Page.js.map
