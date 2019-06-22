import React from 'react';
import renderer from 'react-test-renderer';

import UserInfo from '../UserInfo';

const userMock = {
  avatar: '',
  email: 'Oliver.conner@gmail.com'
};

it('UserInfo correctly render', () => {
  const userInfo = renderer.create(<UserInfo user={userMock} />).toJSON();

  expect(userInfo).toMatchSnapshot();
});
