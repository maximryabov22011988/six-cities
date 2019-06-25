import React from 'react';
import renderer from 'react-test-renderer';

import UserInfo from './UserInfo';

it('UserInfo correctly render', () => {
  const userInfo = renderer
    .create(<UserInfo email="Oliver.conner@gmail.com" />)
    .toJSON();

  expect(userInfo).toMatchSnapshot();
});
