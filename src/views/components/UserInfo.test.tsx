import * as React from 'react';
import renderer from 'react-test-renderer';

import UserInfo from './UserInfo';

const userMock = {
  isAuth: true,
  avatarUrl: '/static/avatar/1.jpg',
  email: 'Oliver.conner@gmail.com',
};

it('UserInfo correctly render', () => {
  const userInfo = renderer
    .create(<UserInfo avatarUrl={userMock.avatarUrl} email={userMock.email} isAuth={userMock.isAuth} />)
    .toJSON();

  expect(userInfo).toMatchSnapshot();
});
