import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

const mockCard = [
  {
    id: 'card-1',
    title: 'Beautiful &amp; luxurious apartment at great location',
    image: 'img/apartment-01.jpg',
    price: 120,
    type: 'Apartment',
    rating: 4.6,
    isPremium: true,
    isBookmark: false
  }
];

it('App correctly renders', () => {
  const app = renderer
    .create(
      <App
        placeCards={mockCard}
      />
    )
    .toJSON();

  expect(app).toMatchSnapshot();
});
