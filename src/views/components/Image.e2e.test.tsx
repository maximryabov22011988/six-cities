import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Image from './Image';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    height: '100',
    src: '/img',
    width: '100',
  };
  wrapper = shallow(<Image {...props} />);
});

describe('Image rendering', () => {
  it('should render with "Loading ..."', () => {
    expect(wrapper.state().imgStatus).toEqual('Loading ...');
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('span').text()).toEqual('Loading ...');
  });
  it('should render with "Failed to load :("', () => {
    wrapper.setState({ imgStatus: 'Failed to load :(' });
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('span').text()).toEqual('Failed to load :(');
  });
  it('should not render status element', () => {
    wrapper.setState({ imgStatus: 'Loaded' });
    expect(wrapper.find('span')).toHaveLength(0);
  });
});
