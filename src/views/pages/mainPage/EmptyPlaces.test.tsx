import * as React from 'react';
import * as renderer from 'react-test-renderer';

import EmptyPlaces from './EmptyPlaces';

it('EmptyPlaces renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <EmptyPlaces city="Paris"/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
