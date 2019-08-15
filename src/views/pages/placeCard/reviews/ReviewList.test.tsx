import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ReviewList from './ReviewList';
import review from '../../../mocks/review';

const reviews = [review];

it('ReviewList renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <ReviewList reviews={reviews}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
