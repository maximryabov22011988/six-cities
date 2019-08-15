'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const PlaceCard_1 = require('./PlaceCard');
const offer_1 = require('../../mocks/offer');
const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });
it('Click on the image link in PlaceCard should work correctly', () => {
  const handleActiveOfferClick = jest.fn();
  const tree = shallow(
    React.createElement(PlaceCard_1.default, {
      className: 'cities',
      offer: offer_1.default,
      onActiveOfferClick: handleActiveOfferClick,
      onAddToFavorities: jest.fn(),
      onRemoveFromFavorities: jest.fn(),
    })
  );
  const imageLink = tree.find('.place-card__image-wrapper a');
  imageLink.simulate('click', 12);
  expect(handleActiveOfferClick.mock.calls[0][0]).toBe(12);
});
//# sourceMappingURL=PlaceCard.e2e.test.js.map
