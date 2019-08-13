import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Content from './Content';

it('Content correctly render', () => {
  const tree = renderer
    .create(
      <Content isEmpty={false} parentClassName="favorites">
        {null}
      </Content>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
