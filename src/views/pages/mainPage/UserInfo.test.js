import React from 'react';
import renderer from 'react-test-renderer';

import UserInfo from './UserInfo';

const userMock = {
  isAuth: true,
  avatarUrl: '/static/avatar/1.jpg',
  email: 'Oliver.conner@gmail.com'
};

it('UserInfo correctly render', () => {
  const userInfo = renderer
    .create(
      <UserInfo
        isAuth={userMock.isAuth}
        avatarUrl={userMock.avatarUrl}
        email={userMock.email}
      />
    )
    .toJSON();

  expect(userInfo).toMatchSnapshot();
});
