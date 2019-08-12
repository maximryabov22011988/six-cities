import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

import Logo from './Logo';

it('Logo correctly render', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Logo position="header" />
    </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
