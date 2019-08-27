import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Image from './Image';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

const createTestProps = (props = {}) => ({
  height: '100',
  src: '/img',
  width: '100',
  ...props,
});

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<Image {...props} />);
});

describe('Image rendering', () => {
  it('should render status element with "Loading ..."', () => {
    expect(wrapper.state().imgStatus).toEqual('Loading ...');
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('span').text()).toEqual('Loading ...');
  });
  it('should render status element with "Failed to load :("', () => {
    wrapper.setState({ imgStatus: 'Failed to load :(' });
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('span').text()).toEqual('Failed to load :(');
  });
  it("don't should render status element", () => {
    wrapper.setState({ imgStatus: 'Loaded' });
    expect(wrapper.find('span')).toHaveLength(0);
  });
});
