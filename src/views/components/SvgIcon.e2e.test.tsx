import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import SvgIcon from './SvgIcon';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    width: '10',
    height: '10',
    name: 'email',
    isShowLabel: false,
  };
  wrapper = shallow(<SvgIcon {...props} />);
});

describe('SvgIcon rendering', () => {
  it('should have CSS-class ".visually-hidden"', () => {
    expect(wrapper.find('span').hasClass('visually-hidden')).toBeTruthy();
  });
  it('don"t should have CSS-class ".visually-hidden"', () => {
    wrapper = shallow(<SvgIcon {...props} isShowLabel={true} />);
    expect(wrapper.find('span').hasClass('visually-hidden')).toBeFalsy();
  });
});
