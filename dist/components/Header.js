'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const propTypes = {
  logo: PropTypes.element,
  userInfo: PropTypes.element,
};
function Header({ logo, userInfo }) {
  return React.createElement(
    'header',
    { className: 'header' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'header__wrapper' },
        React.createElement('div', { className: 'header__left' }, logo),
        React.createElement(
          'nav',
          { className: 'header__nav' },
          React.createElement('ul', { className: 'header__nav-list' }, userInfo)
        )
      )
    )
  );
}
Header.propTypes = propTypes;
exports.default = Header;
//# sourceMappingURL=Header.js.map
