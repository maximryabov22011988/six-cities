import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import MainPage from './MainPage';
import Map from '../components/Map';

import offer from '../mocks/offer';
import user from '../mocks/user';
import city from '../mocks/city';
import currentCity from '../mocks/currentCity';

const offers = [offer];
const cities = [city];

it('MainPage renders correctly with mandatory props', () => {
  Map.prototype.componentDidMount = jest.fn();

  const tree = renderer
    .create(
      <BrowserRouter>
        <MainPage
          addOfferToFavorities={jest.fn()}
          changeCity={jest.fn()}
          changeSorting={jest.fn()}
          cities={cities}
          currentCity={currentCity}
          isAuthUser={true}
          offers={offers}
          removeOfferFromFavorities={jest.fn()}
          user={user}
        />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
