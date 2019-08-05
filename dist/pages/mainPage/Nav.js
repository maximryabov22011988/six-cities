'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const propTypes = {
  children: PropTypes.node,
};
const defaultProps = {
  children: null,
};
function Nav({ children }) {
  return React.createElement(
    'div',
    { className: 'cities tabs' },
    React.createElement('section', { className: 'locations container' }, children)
  );
}
Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
exports.default = Nav;
//# sourceMappingURL=Nav.js.map
