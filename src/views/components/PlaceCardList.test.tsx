import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

import PlaceCardList from './PlaceCardList';
import offer from '../mocks/offer';

const offers = [offer];

it('List of places correctly render on main page', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <PlaceCardList
          offers={offers}
          parentClassName="cities"
          onActiveOfferClick={jest.fn()}
          onAddToFavorities={jest.fn()}
          onRemoveFromFavorities={jest.fn()}
        />
      </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('List of favorites places correctly render', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <PlaceCardList
          offers={offers}
          parentClassName="favorites"
          onAddToFavorities={jest.fn()}
          onRemoveFromFavorities={jest.fn()}
        />
      </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('List of near places correctly render', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <PlaceCardList
          offers={offers}
          parentClassName="near-places"
          onAddToFavorities={jest.fn()}
          onRemoveFromFavorities={jest.fn()}
        />
      </BrowserRouter>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
