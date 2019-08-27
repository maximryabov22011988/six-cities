import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Notification } from './Notification';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    message: 'Error message',
  };
  wrapper = shallow(<Notification {...props} />);
  wrapper.setProps({ show: true });
});

describe('Notification interactions', () => {
  it('should show when prop "show" to be true', () => {
    expect(wrapper.find('div').hasClass('notification--show')).toBeTruthy();
    expect(wrapper.find('.notification--show').contains('Error message')).toBeTruthy();
  });
  it('should hide when call onClick on close button', () => {
    const instance = wrapper.instance();
    const preventDefault = jest.fn();

    expect(wrapper.state('show')).toBeTruthy();
    instance.handleHide({ preventDefault });
    expect(wrapper.state('show')).toBeFalsy();
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.find('div').hasClass('notification--show')).toBeFalsy();
  });
});
