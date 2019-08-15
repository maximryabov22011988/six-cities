import * as React from 'react';
import * as renderer from 'react-test-renderer';

import AddReviewsForm from './AddReviewsForm';

it('AddReviewsForm renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <AddReviewsForm
        hotelId={1}
        onSendReview={jest.fn()}
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
