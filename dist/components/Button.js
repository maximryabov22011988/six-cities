'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
const defaultProps = {
  type: 'button',
};
function Button({ className, type, disabled, children, onClick }) {
  return React.createElement(
    'button',
    { className: classnames_1.default(className, 'button'), disabled: disabled, type: type, onClick: onClick },
    children
  );
}
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
exports.default = Button;
//# sourceMappingURL=Button.js.map
