'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const MainPage_1 = require('./MainPage');
const Map_1 = require('../components/Map');
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
  Map_1.default.prototype.componentDidMount = jest.fn();
  const mainPage = react_test_renderer_1.default
    .create(
      React.createElement(MainPage_1.default, {
        changeCity: jest.fn(),
        cities: citiesMock,
        currentCity: currentCityMock,
        isAuthUser: true,
        offers: offersMock,
        user: userMock,
      })
    )
    .toJSON();
  expect(mainPage).toMatchSnapshot();
});
//# sourceMappingURL=MainPage.test.js.map
