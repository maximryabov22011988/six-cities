import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';

import Logo from './Logo';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    position: 'header',
    isActive: false,
  };
  wrapper = shallow(<Logo {...props} />);
});

describe('Logo rendering', () => {
  it('should render Link', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
  it('should render div', () => {
    wrapper = shallow(<Logo {...props} isActive={true} />);
    expect(wrapper.find('.header__logo-link--active')).toHaveLength(1);
  });
});
