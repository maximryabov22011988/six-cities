import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

import Rating from './Rating';

it('Rating renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Rating parentClassName="place-card" rating={1} />)
      </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
