import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Form from '../../components/Form';
import Field from '../../components/Field';
import SignInForm from './SignInForm';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    onSignIn: jest.fn(),
  };
  wrapper = shallow(<SignInForm {...props} />);
});

const newState = {
  email: 'info@ya.ru',
  password: '12345',
};

describe('SignInForm rendering', () => {
  it('should render correctly', () => {
    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(Field)).toHaveLength(2);
    expect(wrapper.find('.login__submit')).toHaveLength(1);
  });
});

describe('SignInForm interactions', () => {
  it('Button should disabled', () => {
    expect(wrapper.find('.login__submit').props().disabled).toBeTruthy();
  });
  it('Button should not be disabled', () => {
    wrapper.setState(newState);
    expect(wrapper.find('.login__submit').props().disabled).toBeFalsy();
  });

  it('should call onChange correctly', () => {
    wrapper
      .find(Field)
      .at(0)
      .simulate('change', {
        target: {
          name: 'email',
          value: 'info',
        },
      });
    expect(wrapper.state('email')).toBe('info');
    expect(
      wrapper
        .find(Field)
        .at(0)
        .props().value
    ).toBe('info');

    wrapper
      .find(Field)
      .at(1)
      .simulate('change', {
        target: {
          name: 'password',
          value: '123',
        },
      });
    expect(wrapper.state('password')).toBe('123');
    expect(
      wrapper
        .find(Field)
        .at(1)
        .props().value
    ).toBe('123');
  });

  it('should call onSubmit correctly', () => {
    const preventDefault = jest.fn();
    wrapper.setState(newState);
    wrapper.find(Form).simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('isLocked should be true', () => {
    const instance = wrapper.instance();
    expect(instance.isLocked()).toBeTruthy();
  });
  it('isLocked should be false', () => {
    wrapper.setState(newState);
    const instance = wrapper.instance();
    expect(instance.isLocked()).toBeFalsy();
  });
});
