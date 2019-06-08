import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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

Enzyme.configure({ adapter: new Adapter() });

it('Click on the title should work correctly', () => {
  const handleTitleClick = jest.fn();
  const handleImageClick = jest.fn();
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();

  const placeCard = shallow(
    <PlaceCard
      offer={offerMock}
      onTitleClick={handleTitleClick}
      onImageClick={handleImageClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );

  const titleLink = placeCard.find('.place-card__name a');
  titleLink.simulate('click');

  expect(handleTitleClick).toHaveBeenCalledTimes(1);
});

it('Click on the image should work correctly', () => {
  const handleTitleClick = jest.fn();
  const handleImageClick = jest.fn(offer => {
    expect(offer).toEqual(offerMock);
  });
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();

  const placeCard = shallow(
    <PlaceCard
      offer={offerMock}
      onTitleClick={handleTitleClick}
      onImageClick={handleImageClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );

  const imageLink = placeCard.find('.place-card__image-wrapper a');
  imageLink.simulate('click');
});

it('Hover on the PlaceCard should work correctly', () => {
  const handleTitleClick = jest.fn();
  const handleImageClick = jest.fn();
  const handleMouseEnter = jest.fn(offer => event => {
    if (event.type === 'mouseenter') {
      expect(offer).toEqual(offerMock);
    }
  });
  const handleMouseLeave = jest.fn();

  const placeCard = shallow(
    <PlaceCard
      offer={offerMock}
      onTitleClick={handleTitleClick}
      onImageClick={handleImageClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );

  placeCard.simulate('mouseenter', { type: 'mouseenter' });
  expect(handleMouseEnter).toHaveBeenCalledTimes(1);
});
