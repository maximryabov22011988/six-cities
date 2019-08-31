import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Loader } from './Loader';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    isLoading: false,
  };
  wrapper = shallow(<Loader {...props} />);
});

describe('Loader rendering', () => {
  it('should not render', () => {
    expect(wrapper.find('div')).toHaveLength(0);
  });
  it('should render', () => {
    wrapper = shallow(<Loader isLoading={true} />);
    expect(wrapper.find('.lds-ellipsis').children()).toHaveLength(4);
  });
});
