import React from 'react';
import renderer from 'react-test-renderer';

import Rating from './Rating';

it('Rating correctly renders', () => {
  const rating = renderer
    .create(
      <Rating
        rating={1}
      />
    )
    .toJSON();

  expect(rating).toMatchSnapshot();
});
