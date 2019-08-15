import * as React from 'react';
import * as renderer from 'react-test-renderer';

import ReviewItem from './ReviewItem';
import review from '../../../mocks/review';

it('ReviewItem renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <ReviewItem review={review}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
