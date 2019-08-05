'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const Header_1 = require('./Header');
const Logo_1 = require('./Logo');
const UserInfo_1 = require('./UserInfo');
const userMock = {
  isAuth: true,
  avatarUrl: '/static/avatar/1.jpg',
  email: 'Oliver.conner@gmail.com',
};
it('Header correctly render', () => {
  const header = react_test_renderer_1.default
    .create(
      React.createElement(Header_1.default, {
        logo: React.createElement(Logo_1.default, null),
        userInfo: React.createElement(UserInfo_1.default, {
          avatarUrl: userMock.avatarUrl,
          email: userMock.email,
          isAuth: userMock.isAuth,
        }),
      })
    )
    .toJSON();
  expect(header).toMatchSnapshot();
});
//# sourceMappingURL=Header.test.js.map
