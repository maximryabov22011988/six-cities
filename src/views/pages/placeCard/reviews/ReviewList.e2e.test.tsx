import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import ReviewList from './ReviewList';
import ReviewItem from './ReviewItem';
import review from '../../../mocks/review';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  const reviews = [review, review, review, review, review, review, review, review, review, review, review, review];
  props = {
    reviews,
  };
  wrapper = shallow(<ReviewList {...props} />);
});

describe('ReviewList rendering', () => {
  it('should contain Avatar', () => {
    expect(wrapper.find(ReviewItem)).toHaveLength(10);
  });
});
