import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Loader } from './Loader';

it('Loader renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Loader isLoading={true}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
