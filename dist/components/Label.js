'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const propTypes = {
  isShow: PropTypes.bool.isRequired,
  name: PropTypes.string,
  parentClassName: PropTypes.string,
};
function Label({ isShow, name, parentClassName }) {
  return (
    isShow &&
    React.createElement('div', { className: `${parentClassName}__mark` }, React.createElement('span', null, name))
  );
}
Label.propTypes = propTypes;
exports.default = Label;
//# sourceMappingURL=Label.js.map
