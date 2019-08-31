import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import UserInfo from './UserInfo';
import Avatar from './Avatar';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    avatarUrl: '10',
    email: '10',
    isAuth: true,
  };
  wrapper = shallow(<UserInfo {...props} />);
});

describe('UserInfo rendering', () => {
  it('should contain Avatar', () => {
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });
  it('should not contain Avatar', () => {
    wrapper = shallow(<UserInfo {...props} isAuth={false} />);
    expect(wrapper.find(Avatar)).toHaveLength(0);
  });
});
