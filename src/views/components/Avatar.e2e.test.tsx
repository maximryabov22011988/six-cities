import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Avatar from './Avatar';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

const createTestProps = (props) => ({
  alt: 'User avatar',
  parentClassName: 'header',
  src: '/img',
  ...props,
});

describe('Avatar rendering', () => {
  describe('User name', () => {
    it('should render element', () => {
      props = createTestProps({ name: 'info@test.ru' });
      wrapper = shallow(<Avatar {...props} />);
      expect(wrapper.find('.header__user-name')).toHaveLength(1);
    });

    it('should render correct text element', () => {
      expect(wrapper.find('.header__user-name').text()).toBe('info@test.ru');
    });

    it("don't should render element", () => {
      props = createTestProps({ name: null });
      wrapper = shallow(<Avatar {...props} />);
      expect(wrapper.find('.header__user-name')).toHaveLength(0);
    });
  });

  describe('User status', () => {
    it('should render element', () => {
      props = createTestProps({ showStatus: true });
      wrapper = shallow(<Avatar {...props} />);
      expect(wrapper.find('.header__user-status')).toHaveLength(1);
    });

    it('should render correct text element', () => {
      expect(wrapper.find('.header__user-status').text()).toBe('Pro');
    });

    it("don't should render element", () => {
      props = createTestProps({ showStatus: false });
      wrapper = shallow(<Avatar {...props} />);
      expect(wrapper.find('.header__user-status')).toHaveLength(0);
    });
  });

  it('should render wrapper className with pro status', () => {
    props = createTestProps({ isPro: true });
    wrapper = shallow(<Avatar {...props} />);
    expect(wrapper.find('.header__avatar-wrapper--pro')).toHaveLength(1);
  });
});
