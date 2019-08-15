'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
function Label({ isShow, name, parentClassName }) {
  return (
    isShow &&
    React.createElement('div', { className: `${parentClassName}__mark` }, React.createElement('span', null, name))
  );
}
exports.default = Label;
//# sourceMappingURL=Label.js.map
