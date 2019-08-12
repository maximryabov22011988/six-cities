import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

import Header from './Header';
import Logo from './Logo';
import UserInfo from './UserInfo';
import user from '../mocks/user';

it('Header correctly render', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Header
          logo={<Logo position="header" />}
          userInfo={<UserInfo avatarUrl={user.avatar_url} email={user.email} isAuth={true} />}
        />
      </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
