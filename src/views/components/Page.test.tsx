import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Page from './Page';

it('Page correctly render', () => {
  const tree = renderer
    .create(
      <Page>{null}</Page>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
