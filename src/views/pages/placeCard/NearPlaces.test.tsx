import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

import NearPlaces from './NearPlaces';
import offer from '../../mocks/offer';

const offers = [offer];

it('NearPlaces renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NearPlaces
          offers={offers}
          onAddToFavorities={jest.fn()}
          onRemoveFromFavorities={jest.fn()}
        />
      </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
