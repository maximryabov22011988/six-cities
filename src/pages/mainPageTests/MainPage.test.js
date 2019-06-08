import React from 'react';
import renderer from 'react-test-renderer';

import MainPage from '../MainPage';

const offersMock = [
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

it('MainPage correctly renders', () => {
  const mainPage = renderer.create(<MainPage offers={offersMock} />).toJSON();

  expect(mainPage).toMatchSnapshot();
});
