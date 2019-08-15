import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Notification } from './Notification';

it('Notification renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Notification show={true} message="Error"/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
