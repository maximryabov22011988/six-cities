'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const UserInfo_1 = require('./UserInfo');
const userMock = {
  isAuth: true,
  avatarUrl: '/static/avatar/1.jpg',
  email: 'Oliver.conner@gmail.com',
};
it('UserInfo correctly render', () => {
  const userInfo = react_test_renderer_1.default
    .create(
      React.createElement(UserInfo_1.default, {
        avatarUrl: userMock.avatarUrl,
        email: userMock.email,
        isAuth: userMock.isAuth,
      })
    )
    .toJSON();
  expect(userInfo).toMatchSnapshot();
});
//# sourceMappingURL=UserInfo.test.js.map
