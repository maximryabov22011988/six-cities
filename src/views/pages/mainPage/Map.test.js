import React from 'react';
import renderer from 'react-test-renderer';

import Map from './Map';

const offersMock = [
  {
    id: 'card-1',
    title: 'Beautiful &amp; luxurious apartment at great location',
    image: 'img/apartment-01.jpg',
    price: 120,
    type: 'Apartment',
    rating: 4.6,
    isPremium: true,
    isBookmark: false,
    location: [52.3909553943508, 4.85309666406198]
  }
];

const city = [52.38333, 4.9];

it(`Map correctly render`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const map = renderer.create(<Map offers={offersMock} city={city} />).toJSON();

  expect(map).toMatchSnapshot();
});
