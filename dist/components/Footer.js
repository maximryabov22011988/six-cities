'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
const defaultProps = {
  children: null,
};
function Footer({ className, children }) {
  return React.createElement('footer', { className: className }, children);
}
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
exports.default = Footer;
//# sourceMappingURL=Footer.js.map
