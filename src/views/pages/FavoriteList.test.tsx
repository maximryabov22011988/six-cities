import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import FavoriteList from './FavoriteList';
import offer from '../mocks/offer';
import user from '../mocks/user';

const offers = {
  [offer.city.name]: [offer],
};

describe('FavoriteList', () => {
  it('renders correctly with offers', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <FavoriteList
            isAuthUser={true}
            isEmpty={false}
            offers={offers}
            user={user}
            onAddOfferToFavorities={jest.fn()}
            onRemoveOfferFromFavorities={jest.fn()}
          />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without offers', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <FavoriteList
            isAuthUser={true}
            isEmpty={true}
            offers={[]}
            user={user}
            onAddOfferToFavorities={jest.fn()}
            onRemoveOfferFromFavorities={jest.fn()}
          />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
