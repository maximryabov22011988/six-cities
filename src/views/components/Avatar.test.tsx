import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Avatar from './Avatar';

it('Avatar correctly render', () => {
  const tree = renderer
    .create(
      <Avatar
        alt="User avatar"
        name="info@test.ru"
        parentClassName="header" src="/img"
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
