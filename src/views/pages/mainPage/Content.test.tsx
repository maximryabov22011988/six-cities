import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Content from './Content';

it('Content renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <Content isEmpty={false}>
        {null}
      </Content>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
