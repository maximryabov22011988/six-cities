'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
const getDisplayName_1 = require('../utils/getDisplayName');
function withActiveItem(WrappedComponent) {
  function WithActiveItem(props) {
    const { className, isActive, children } = props;
    return React.createElement(
      WrappedComponent,
      Object.assign({}, props, { className: classnames_1.default(className, isActive && `${className}--active`) }),
      children
    );
  }
  WithActiveItem.displayName = `WithActiveItem(${getDisplayName_1.default(WrappedComponent)})`;
  return WithActiveItem;
}
exports.default = withActiveItem;
//# sourceMappingURL=withActiveItem.js.map
