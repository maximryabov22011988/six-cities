'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
function Avatar({ alt, height, isPro = false, name, parentClassName, showStatus = false, src, width }) {
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
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map
