import React from 'react';
import renderer from 'react-test-renderer';

import Places from './Places';

const offersMock = [
  {
    id: 'card-5',
    title: 'Wood and stone place',
    image: 'img/room.jpg',
    price: 80,
    type: 'Private room',
    rating: 4,
    isPremium: false,
    isBookmark: true
  }
];

it('Places correctly render', () => {
  const placeCard = renderer
    .create(
      <Places
        searchResultText="1 places to stay in Paris"
        offers={offersMock}
      />
    )
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});
