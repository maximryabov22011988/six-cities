import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import PlaceCard from './PlaceCard';
import offer from '../../mocks/offer';

describe('PlaceCard', () => {
  it('correctly render on main page', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <PlaceCard
            className="cities"
            offer={offer}
            onActiveOfferClick={jest.fn()}
            onAddToFavorities={jest.fn()}
            onRemoveFromFavorities={jest.fn()}
          />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('near places correctly render', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <PlaceCard
            className="near-places"
            offer={offer}
            onActiveOfferClick={undefined}
            onAddToFavorities={jest.fn()}
            onRemoveFromFavorities={jest.fn()}
          />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('favorites places correctly render', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <PlaceCard
            className="favorites"
            offer={offer}
            onActiveOfferClick={undefined}
            onAddToFavorities={jest.fn()}
            onRemoveFromFavorities={jest.fn()}
          />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
