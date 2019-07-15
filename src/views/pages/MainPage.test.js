import React from 'react';
import renderer from 'react-test-renderer';

import MainPage from './MainPage';
import Map from './mainPage/Map';

const userMock = {
  avatarUrl: '/static/avatar/1.jpg',
  email: 'Oliver.conner@gmail.com',
};

const currentCityMock = {
  name: 'Cologne',
  location: [50.938361, 6.959974],
};

const citiesMock = [
  {
    name: 'Cologne',
    location: [50.938361, 6.959974],
    zoom: 13,
  },
];

const offersMock = [
  {
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
  },
];

it('MainPage correctly render', () => {
  Map.prototype.componentDidMount = jest.fn();
  const mainPage = renderer
    .create(
      <MainPage
        user={userMock}
        currentCity={currentCityMock}
        cities={citiesMock}
        offers={offersMock}
        changeCity={jest.fn()}
        isAuthUser
      />,
    )
    .toJSON();

  expect(mainPage).toMatchSnapshot();
});
