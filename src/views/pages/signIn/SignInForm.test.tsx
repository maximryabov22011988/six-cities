import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SignInForm from './SignInForm';

it('SignInForm renders correctly with mandatory props', () => {
  const tree = renderer.create(<SignInForm onSignIn={jest.fn()} />).toJSON();
  expect(tree).toMatchSnapshot();
});
