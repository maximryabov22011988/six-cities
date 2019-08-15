import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Image from './Image';

it('Image renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Image
        height="100"
        src="/img"
        width="100"
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
