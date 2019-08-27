import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Label from './Label';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    isShow: false,
    name: 'Premium',
    parentClassName: 'place-card',
  };
  wrapper = shallow(<Label {...props} />);
});

describe('Label rendering', () => {
  it("don't should render", () => {
    expect(wrapper.find('span')).toHaveLength(0);
  });
  it('should render', () => {
    wrapper = shallow(<Label {...props} isShow={true} />);
    expect(wrapper.find('span')).toHaveLength(1);
  });
});
