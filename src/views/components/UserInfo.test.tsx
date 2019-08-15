import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import UserInfo from './UserInfo';
import user from '../mocks/user';

it('UserInfo renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <UserInfo avatarUrl={user.avatar_url} email={user.email} isAuth={true} />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
