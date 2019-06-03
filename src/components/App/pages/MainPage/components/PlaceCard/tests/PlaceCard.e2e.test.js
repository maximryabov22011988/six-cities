import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

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

Enzyme.configure({adapter: new Adapter()});

it('Title clicked on PlaceCard', () => {
  const handleClick = jest.fn();

  const placeCard = shallow(
    <PlaceCard card={mockCard} onTitleClick={handleClick} />
  );

  const titleLink = placeCard.find('.place-card__name a');

  titleLink.simulate(
    'click',
    {
      preventDefault() {}
    }
  );

  expect(handleClick).toHaveBeenCalledTimes(1);
});


