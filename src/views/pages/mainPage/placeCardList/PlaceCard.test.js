import React from 'react';
import renderer from 'react-test-renderer';

import PlaceCard from './PlaceCard';

const offerMock = {
  id: 1,
  city: {
    name: 'Cologne',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  title: 'The Pondhouse - A Magical Place',
  preview_image: `img/apartment-01.jpg`,
  price: 120,
  type: 'house',
  rating: 4.6,
  is_premium: true,
  is_favorite: false
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
