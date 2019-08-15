import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Rating from './Rating';

it('Rating renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Rating currentRating="1" onChange={jest.fn()}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
