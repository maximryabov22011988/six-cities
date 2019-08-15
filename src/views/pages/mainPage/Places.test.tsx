import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

import Places from './Places';
import offer from '../../mocks/offer';

const offers = [offer];

it('Places renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Places
          offers={offers}
          searchResultText="1 places to stay in Paris"
          onActiveOfferClick={jest.fn()}
          onAddToFavorities={jest.fn()}
          onChangeSorting={jest.fn()}
          onRemoveFromFavorities={jest.fn()}
        />
      </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
