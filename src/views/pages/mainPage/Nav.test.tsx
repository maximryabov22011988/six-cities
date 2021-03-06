import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Nav from './Nav';

it('Nav renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Nav>{null}</Nav>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
