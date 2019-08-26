import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Reviews } from './Reviews';
import review from '../../mocks/review';

const reviews = [review];

it('Reviews renders correctly with mandatory props', () => {
  const tree = renderer.create(<Reviews hotelId={1} reviews={reviews} loadReviews={jest.fn()} />).toJSON();

  expect(tree).toMatchSnapshot();
});
