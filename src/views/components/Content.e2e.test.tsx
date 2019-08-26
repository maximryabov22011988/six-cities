import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Content from './Content';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    isEmpty: true,
    parentClassName: 'favorites',
  };
  wrapper = shallow(<Content {...props}>{null}</Content>);
});

describe('Content rendering', () => {
  describe('Empty CSS-class', () => {
    it('should contain in main element', () => {
      expect(wrapper.find('main').hasClass('page__main--favorites-empty')).toBeTruthy();
    });
    it('should contain in section element', () => {
      expect(wrapper.find('section').hasClass('favorites--empty')).toBeTruthy();
    });
  });
});
