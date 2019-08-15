import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Header from './Header';

it('Header renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Header
        logo={null}
        userInfo={null}
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
