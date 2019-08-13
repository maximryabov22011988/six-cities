import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SvgIcon from './SvgIcon';

it('SvgIcon correctly render', () => {
  const tree = renderer
    .create(
      <SvgIcon
        name="icon-test"
        height="10"
        width="10"
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
