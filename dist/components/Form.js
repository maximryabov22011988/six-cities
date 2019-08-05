'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
const propTypes = {
  action: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  method: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
const defaultProps = {
  action: '#',
  children: null,
};
function Form({ className, action, method, onSubmit, children }) {
  return React.createElement(
    'form',
    { action: action, className: classnames_1.default(className, 'form'), method: method, onSubmit: onSubmit },
    children
  );
}
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
exports.default = Form;
//# sourceMappingURL=Form.js.map
