import * as React from 'react';
import * as renderer from 'react-test-renderer';

import PlacesContainer from './PlacesContainer';

it('PlacesContainer renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <PlacesContainer
        isEmpty={false}
        leftPanel={null}
        rightPanel={null}
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
