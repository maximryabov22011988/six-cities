import React from 'react';
import renderer from 'react-test-renderer';

import UserInfo from './UserInfo';

const userMock = {
  avatar: '',
  email: 'Oliver.conner@gmail.com'
};

it('UserInfo correctly render', () => {
  const userInfo = renderer
    .create(<UserInfo email={userMock.email} />)
    .toJSON();

  expect(userInfo).toMatchSnapshot();
});
