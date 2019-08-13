'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const renderer = require('react-test-renderer');
const react_router_dom_1 = require('react-router-dom');
const Header_1 = require('./Header');
const Logo_1 = require('./Logo');
const UserInfo_1 = require('./UserInfo');
const user_1 = require('../mocks/user');
it('Header correctly render', () => {
  const tree = renderer
    .create(
      React.createElement(
        react_router_dom_1.BrowserRouter,
        null,
        React.createElement(Header_1.default, {
          logo: React.createElement(Logo_1.default, { position: 'header' }),
          userInfo: React.createElement(UserInfo_1.default, {
            avatarUrl: user_1.default.avatar_url,
            email: user_1.default.email,
            isAuth: true,
          }),
        })
      )
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Header.test.js.map
