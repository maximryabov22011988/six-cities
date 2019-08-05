'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  isPro: PropTypes.bool,
  name: PropTypes.string,
  parentClassName: PropTypes.string,
  showStatus: PropTypes.bool,
  src: PropTypes.string,
  width: PropTypes.string,
};
const defaultProps = {
  isPro: false,
  showStatus: false,
};
function Avatar({ alt, height, isPro, name, parentClassName, showStatus, src, width }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      {
        className: `${parentClassName}__avatar-wrapper user__avatar-wrapper ${isPro &&
          `${parentClassName}__avatar-wrapper--pro`}`,
      },
      React.createElement('img', {
        alt: alt,
        className: 'reviews__avatar user__avatar',
        height: height,
        src: src,
        width: width,
      })
    ),
    name && React.createElement('span', { className: `${parentClassName}__user-name` }, name),
    showStatus && React.createElement('span', { className: `${parentClassName}__user-status` }, 'Pro')
  );
}
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map
