import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Form from '../../components/Form';
import Button from '../../components/Button';
import Rating from './addReviewsForm/Rating';
import AddReviewsForm from './AddReviewsForm';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    hotelId: 1,
    onSendReview: jest.fn(),
  };
  wrapper = shallow(<AddReviewsForm {...props} />);
});

const newState = {
  rating: 3,
  review: 'Tell how was your stay, what you like and what can be improved',
};

describe('AddReviewsForm rendering', () => {
  it('should render correctly', () => {
    expect(wrapper.find(Rating)).toHaveLength(1);
    expect(wrapper.find('.reviews__textarea')).toHaveLength(1);
    expect(wrapper.find('.reviews__submit')).toHaveLength(1);
  });
});

describe('AddReviewsForm interactions', () => {
  it('Button should disabled', () => {
    expect(wrapper.find(Button).props().disabled).toBeTruthy();
  });
  it('Button should not be disabled', () => {
    wrapper.setState(newState);
    expect(wrapper.find(Button).props().disabled).toBeFalsy();
  });

  it('should call onChange correctly', () => {
    wrapper.find('textarea').simulate('change', {
      target: {
        name: 'review',
        value: 'some text',
      },
    });
    expect(wrapper.state('review')).toBe('some text');
    expect(wrapper.find('textarea').props().value).toBe('some text');

    wrapper.find(Rating).simulate('change', {
      target: {
        name: 'rating',
        value: '3',
      },
    });
    expect(wrapper.state('rating')).toBe('3');
    expect(wrapper.find(Rating).props().currentRating).toBe('3');
  });

  it('should call onSubmit correctly', () => {
    const preventDefault = jest.fn();
    wrapper.setState(newState);
    wrapper.find(Form).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('isCorrectComment should be true', () => {
    wrapper.setState({ review: newState.review });
    const instance = wrapper.instance();
    expect(instance.isCorrectComment()).toBeTruthy();
  });
  it('isCorrectComment should be false', () => {
    wrapper.setState({ review: 'Test' });
    const instance = wrapper.instance();
    expect(instance.isCorrectComment()).toBeFalsy();
  });

  it('isCorrectRating should be true', () => {
    wrapper.setState({ rating: newState.rating });
    const instance = wrapper.instance();
    expect(instance.isCorrectRating()).toBeTruthy();
  });
  it('isCorrectRating should be false', () => {
    wrapper.setState({ rating: null });
    const instance = wrapper.instance();
    expect(instance.isCorrectRating()).toBeFalsy();
  });
});
