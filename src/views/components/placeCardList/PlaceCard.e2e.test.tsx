import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './PlaceCard';

const offerMock = {
  id: 1,
  city: {
    name: 'Cologne',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  title: 'The Pondhouse - A Magical Place',
  preview_image: `img/apartment-01.jpg`,
  price: 120,
  type: 'house',
  rating: 4.6,
  is_premium: true,
  is_favorite: false,
};

Enzyme.configure({ adapter: new Adapter() });

it('Click on the title should work correctly', () => {
  const handleTitleClick = jest.fn();
  const handleImageClick = jest.fn();
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();

  const placeCard = shallow(
    <PlaceCard
      offer={offerMock}
      onImageClick={handleImageClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTitleClick={handleTitleClick}
    />
  );

  const titleLink = placeCard.find('.place-card__name a');
  titleLink.simulate('click');

  expect(handleTitleClick).toHaveBeenCalledTimes(1);
});

it('Click on the image should work correctly', () => {
  const handleTitleClick = jest.fn();
  const handleImageClick = jest.fn((offer) => {
    expect(offer).toEqual(offerMock);
  });
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();

  const placeCard = shallow(
    <PlaceCard
      offer={offerMock}
      onImageClick={handleImageClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTitleClick={handleTitleClick}
    />
  );

  const imageLink = placeCard.find('.place-card__image-wrapper a');
  imageLink.simulate('click');
});

it('Hover on the PlaceCard should work correctly', () => {
  const handleTitleClick = jest.fn();
  const handleImageClick = jest.fn();
  const handleMouseEnter = jest.fn((offer) => (event) => {
    if (event.type === 'mouseenter') {
      expect(offer).toEqual(offerMock);
    }
  });
  const handleMouseLeave = jest.fn();

  const placeCard = shallow(
    <PlaceCard
      offer={offerMock}
      onImageClick={handleImageClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTitleClick={handleTitleClick}
    />
  );

  placeCard.simulate('mouseenter', { type: 'mouseenter' });
  expect(handleMouseEnter).toHaveBeenCalledTimes(1);
});
