import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Form from './Form';

it('Form renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Form
        className="login__form"
        method="get"
        onSubmit={jest.fn()}
      >
        {null}
      </Form>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
