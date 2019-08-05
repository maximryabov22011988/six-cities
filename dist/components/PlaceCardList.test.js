'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const PlaceCardList_1 = require('./PlaceCardList');
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
it('PlaceCardList correctly render', () => {
  const placeCard = react_test_renderer_1.default
    .create(React.createElement(PlaceCardList_1.default, { offers: offersMock }))
    .toJSON();
  expect(placeCard).toMatchSnapshot();
});
//# sourceMappingURL=PlaceCardList.test.js.map
