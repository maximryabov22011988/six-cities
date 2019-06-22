import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../Logo';

it('Logo correctly render', () => {
  const logo = renderer.create(<Logo />).toJSON();

  expect(logo).toMatchSnapshot();
});
