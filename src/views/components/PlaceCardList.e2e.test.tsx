import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import PlaceCardList from './PlaceCardList';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    parentClassName: 'favorites',
    offers: [],
    onAddToFavorities: jest.fn(),
    onRemoveFromFavorities: jest.fn(),
  };
  wrapper = shallow(<PlaceCardList {...props} />);
});

describe('PlaceCardList rendering', () => {
  it('should have CSS-class ".favorites__places"', () => {
    expect(wrapper.find('div').hasClass('favorites__places')).toBeTruthy();
  });
  it('should have CSS-class ".cities__places-list"', () => {
    wrapper = shallow(<PlaceCardList {...props} parentClassName="cities" />);
    expect(wrapper.find('div').hasClass('cities__places-list')).toBeTruthy();
  });
  it('should have CSS-class ".near-places__list"', () => {
    wrapper = shallow(<PlaceCardList {...props} parentClassName="near-places" />);
    expect(wrapper.find('div').hasClass('near-places__list')).toBeTruthy();
  });
});
