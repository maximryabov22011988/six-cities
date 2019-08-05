'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
const propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  isShowLabel: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
};
function SvgIcon({ className, height, isShowLabel, label, name, width }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'svg',
      { className: className, height: height, width: width },
      React.createElement('use', { xlinkHref: `#${name}` })
    ),
    React.createElement('span', { className: classnames_1.default(!isShowLabel && 'visually-hidden') }, label)
  );
}
SvgIcon.propTypes = propTypes;
exports.default = SvgIcon;
//# sourceMappingURL=SvgIcon.js.map
