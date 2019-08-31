import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Select from './Select';
import { defaultId, options } from '../../../mocks/options';

import { ESC } from '../../../constants/keyCodes';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    options,
    caption: 'Sort by',
    defaultOption: defaultId,
    onChangeSorting: jest.fn(),
  };
  wrapper = shallow(<Select {...props} />);
});

describe('Select rendering', () => {
  it('should contain caption', () => {
    expect(
      wrapper
        .find('span')
        .first()
        .hasClass('places__sorting-caption')
    ).toBeTruthy();
    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toBe('Sort by');
  });
  it('should not contain caption', () => {
    wrapper = shallow(<Select {...props} caption={null} />);
    expect(wrapper.find('.places__sorting-caption')).toHaveLength(0);
  });

  it('should contain ul', () => {
    wrapper = shallow(<Select {...props} />);
    wrapper.setState({ isOpen: true });
    expect(wrapper.find('.places__options')).toHaveLength(1);
  });
  it('should not contain ul', () => {
    wrapper = shallow(<Select {...props} />);
    expect(wrapper.find('.places__options')).toHaveLength(0);
  });
});

describe('Select interactions', () => {
  it('should show ul call onClick by span', () => {
    expect(wrapper.state('isOpen')).toBeFalsy();
    wrapper.find('.places__sorting-type').simulate('click');
    expect(wrapper.state('isOpen')).toBeTruthy();
    expect(wrapper.find('ul').hasClass('places__options--opened')).toBeTruthy();
  });
  it('should show ul call onFocus by span', () => {
    expect(wrapper.state('isOpen')).toBeFalsy();
    wrapper.find('.places__sorting-type').simulate('focus');
    expect(wrapper.state('isOpen')).toBeTruthy();
    expect(wrapper.find('ul').hasClass('places__options--opened')).toBeTruthy();
  });

  it('state isOpen should be true', () => {
    const instance = wrapper.instance();
    expect(wrapper.state('isOpen')).toBeFalsy();
    instance.handleOpen();
    expect(wrapper.state('isOpen')).toBeTruthy();
  });
  it('state isOpen should be false', () => {
    const instance = wrapper.instance();
    expect(wrapper.state('isOpen')).toBeFalsy();
    instance.handleOpen();
    expect(wrapper.state('isOpen')).toBeTruthy();
    instance.handleClose();
    expect(wrapper.state('isOpen')).toBeFalsy();
  });
});

describe('Select lifecycle methods', () => {
  describe('componentDidMount method is invoked', () => {
    it('should add click listener', () => {
      const eventMap = {
        click: null,
      };
      window.addEventListener = jest.fn((evtType, cb) => {
        eventMap[evtType] = cb;
      });
      const instance = wrapper.instance();
      const preventDefault = jest.fn();
      instance.componentDidMount();
      eventMap.click({ preventDefault });
      expect(preventDefault).toBeCalled();
    });

    it('should add keydown listener', () => {
      const evt = {
        nativeEvent: {
          which: ESC,
        },
      };

      const eventMap = {
        keydown: null,
      };
      window.addEventListener = jest.fn((evtType, cb) => {
        eventMap[evtType] = cb;
      });
      const instance = wrapper.instance();
      instance.handleClose = jest.fn();

      instance.componentDidMount();
      eventMap.keydown(evt);

      expect(instance.handleClose).toBeCalled();
    });
  });
});
