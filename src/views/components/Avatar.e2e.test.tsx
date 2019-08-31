import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Avatar from './Avatar';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    alt: 'User avatar',
    parentClassName: 'header',
    src: '/img',
    name: 'info@test.ru',
  };
});

describe('Avatar rendering', () => {
  it('should render user name element', () => {
    wrapper = shallow(<Avatar {...props} />);
    expect(wrapper.find('.header__user-name')).toHaveLength(1);
    expect(wrapper.find('.header__user-name').text()).toBe('info@test.ru');
  });
  it('should not render user name element', () => {
    wrapper = shallow(<Avatar {...props} name={null} />);
    expect(wrapper.find('.header__user-name')).toHaveLength(0);
  });

  it('should render user status element', () => {
    wrapper = shallow(<Avatar {...props} showStatus={true} />);
    expect(wrapper.find('.header__user-status')).toHaveLength(1);
    expect(wrapper.find('.header__user-status').text()).toBe('Pro');
  });
  it('should not render user status element', () => {
    wrapper = shallow(<Avatar {...props} showStatus={false} />);
    expect(wrapper.find('.header__user-status')).toHaveLength(0);
  });

  it('should render wrapper with ".header__avatar-wrapper--pro"', () => {
    wrapper = shallow(<Avatar {...props} isPro={true} />);
    expect(wrapper.find('.user__avatar-wrapper').hasClass('header__avatar-wrapper--pro')).toBeTruthy();
  });
});
