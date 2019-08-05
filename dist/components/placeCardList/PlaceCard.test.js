'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_test_renderer_1 = require('react-test-renderer');
const PlaceCard_1 = require('./PlaceCard');
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
it('PlaceCard correctly render', () => {
  const handleTitleClick = jest.fn();
  const handleImageClick = jest.fn();
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();
  const placeCard = react_test_renderer_1.default
    .create(
      React.createElement(PlaceCard_1.default, {
        offer: offerMock,
        onImageClick: handleImageClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onTitleClick: handleTitleClick,
      })
    )
    .toJSON();
  expect(placeCard).toMatchSnapshot();
});
//# sourceMappingURL=PlaceCard.test.js.map
