import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from './PlaceCard';

const offerMock = {
  id: 'card-5',
  title: 'Wood and stone place',
  image: 'img/room.jpg',
  price: 80,
  type: 'Private room',
  rating: 4,
  isPremium: false,
  isBookmark: true
};

it('PlaceCard correctly render', () => {
  const handleTitleClick = jest.fn();
  const handleImageClick = jest.fn();
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();

  const placeCard = renderer
    .create(
      <PlaceCard
        offer={offerMock}
        onTitleClick={handleTitleClick}
        onImageClick={handleImageClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    )
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});
