'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_router_dom_1 = require('react-router-dom');
const Avatar_1 = require('./Avatar');
const api_1 = require('../../api');
const propTypes = {
  avatarUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  email: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  isAuth: PropTypes.bool.isRequired,
};
class UserInfo extends React.PureComponent {
  render() {
    const { isAuth, avatarUrl, email } = this.props;
    return React.createElement(
      'li',
      { className: 'header__nav-item user' },
      !isAuth
        ? React.createElement(react_router_dom_1.Link, { to: '/login' }, 'Sign In')
        : React.createElement(
            react_router_dom_1.Link,
            { className: 'header__nav-link header__nav-link--profile', to: '/favorites' },
            React.createElement(Avatar_1.default, {
              alt: 'User avatar',
              name: email,
              parentClassName: 'header',
              src: `${api_1.BASE_URL}${avatarUrl}`,
            })
          )
    );
  }
}
UserInfo.propTypes = propTypes;
exports.default = UserInfo;
//# sourceMappingURL=UserInfo.js.map
