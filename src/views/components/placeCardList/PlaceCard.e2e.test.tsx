import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './PlaceCard';
import offer from '../../mocks/offer';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

it('Click on the image link in PlaceCard should work correctly', () => {
  const handleActiveOfferClick = jest.fn();
  const tree = shallow(
    <PlaceCard
      className="cities"
      offer={offer}
      onActiveOfferClick={handleActiveOfferClick}
      onAddToFavorities={jest.fn()}
      onRemoveFromFavorities={jest.fn()}
    />
  );

  const imageLink = tree.find('.place-card__image-wrapper a');
  imageLink.simulate('click', 12);
  expect(handleActiveOfferClick.mock.calls[0][0]).toBe(12);
});
