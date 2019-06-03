import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from '../PlaceCard';

const mockCard = {
  id: 'card-5',
  title: 'Wood and stone place',
  image: 'img/room.jpg',
  price: 80,
  type: 'Private room',
  rating: 4,
  isPremium: false,
  isBookmark: true
};

it('PlaceCard correctly renders', () => {
  const placeCard = renderer
    .create(
      <PlaceCard
        card={mockCard}
      />
    )
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});
