'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_router_dom_1 = require('react-router-dom');
const classnames_1 = require('classnames');
class Logo extends React.PureComponent {
  render() {
    const {
      position,
      src = 'img/logo.svg',
      width = '81',
      height = '41',
      label = '6 cities logo',
      isActive,
    } = this.props;
    const linkClasses = classnames_1.default(
      position && `${position}__logo-link`,
      isActive && `${position}__logo-link--active`
    );
    const logoClasses = classnames_1.default(position && `${position}__logo`);
    return isActive
      ? React.createElement(
          'div',
          { className: linkClasses },
          React.createElement('img', { alt: label, className: logoClasses, height: height, src: src, width: width })
        )
      : React.createElement(
          react_router_dom_1.Link,
          { className: linkClasses, to: '/' },
          React.createElement('img', { alt: label, className: logoClasses, height: height, src: src, width: width })
        );
  }
}
exports.default = Logo;
//# sourceMappingURL=Logo.js.map
