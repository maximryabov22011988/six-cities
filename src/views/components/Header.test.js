import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';
import Logo from './Logo';
import UserInfo from '../pages/mainPage/UserInfo';

const userMock = {
  isAuth: true,
  avatarUrl: '/static/avatar/1.jpg',
  email: 'Oliver.conner@gmail.com'
};

it('Header correctly render', () => {
  const header = renderer
    .create(
      <Header
        logo={<Logo />}
        userInfo={
          <UserInfo
            isAuth={userMock.isAuth}
            avatarUrl={userMock.avatarUrl}
            email={userMock.email}
          />
        }
      />
    )
    .toJSON();

  expect(header).toMatchSnapshot();
});
