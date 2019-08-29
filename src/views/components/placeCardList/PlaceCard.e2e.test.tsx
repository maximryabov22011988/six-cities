import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './PlaceCard';
import offer from '../../mocks/offer';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    className: 'cities',
    offer,
    onAddToFavorities: jest.fn(),
    onRemoveFromFavorities: jest.fn(),
  };
  wrapper = shallow(<PlaceCard {...props} />);
});

describe('PlaceCard rendering', () => {
  it('should have CSS-class ".cities__place-card"', () => {
    expect(wrapper.find('article').hasClass('cities__place-card')).toBeTruthy();
  });
  it('should have CSS-class ".near-places__card"', () => {
    wrapper = shallow(<PlaceCard {...props} className="near-places" />);
    expect(wrapper.find('article').hasClass('near-places__card')).toBeTruthy();
  });
  it('should have CSS-class ".favorites__card"', () => {
    wrapper = shallow(<PlaceCard {...props} className="favorites" />);
    expect(wrapper.find('article').hasClass('favorites__card')).toBeTruthy();
  });
});

describe('PlaceCard interactions', () => {
  it('Click on the image link in PlaceCard should work correctly', () => {
    const handleActiveOfferClick = jest.fn();
    wrapper = shallow(<PlaceCard {...props} onActiveOfferClick={handleActiveOfferClick} />);
    wrapper.find('.place-card__image-wrapper a').simulate('click', 12);
    expect(handleActiveOfferClick.mock.calls[0][0]).toBe(12);
  });
});
