import React from 'react';
import renderer from 'react-test-renderer';

import { MainPage } from './MainPage';
import Map from './mainPage/Map';

const cityMock = {
  city: {
    name: 'Paris',
    coords: [10, 10]
  }
};

const offersMock = [
  {
    city: 'Paris',
    offers: [
      {
        id: 'card-1',
        title: 'Beautiful &amp; luxurious apartment at great location',
        image: `img/apartment-01.jpg`,
        price: 120,
        type: 'Apartment',
        rating: 4.6,
        isPremium: true,
        isBookmark: false,
        location: [52.3909553943508, 4.85309666406198]
      }
    ]
  }
];

it('MainPage correctly render', () => {
  Map.prototype.componentDidMount = jest.fn();
  const mainPage = renderer
    .create(<MainPage city={cityMock} offers={offersMock} />)
    .toJSON();

  expect(mainPage).toMatchSnapshot();
});
