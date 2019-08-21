import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import SignIn from './SignIn';

it('SignIn renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <SignIn onSignIn={jest.fn()} />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
