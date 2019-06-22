import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCardList from './PlaceCardList';

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

it('PlaceCardList correctly render', () => {
  const placeCard = renderer
    .create(<PlaceCardList offers={offersMock} />)
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});
