import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';
import Logo from './Logo';
import UserInfo from '../pages/mainPage/UserInfo';

const userMock = {
  avatar: '',
  email: 'Oliver.conner@gmail.com'
};

it('Header correctly render', () => {
  const header = renderer
    .create(
      <Header logo={<Logo />} userInfo={<UserInfo email={userMock.email} />} />
    )
    .toJSON();

  expect(header).toMatchSnapshot();
});
