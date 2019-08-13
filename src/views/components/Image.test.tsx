import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Image from './Image';

it('Image correctly render', () => {
  const tree = renderer
    .create(
      <Image
        src="/img"
        height="100"
        width="100"
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
