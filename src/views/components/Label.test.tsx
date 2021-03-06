import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Label from './Label';

it('Label renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Label
        isShow={true}
        name="Premium"
        parentClassName="place-card"
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
