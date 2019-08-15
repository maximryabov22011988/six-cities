import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Button from './Button';

it('Button renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Button className="login__submit form__submit">Button</Button>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
