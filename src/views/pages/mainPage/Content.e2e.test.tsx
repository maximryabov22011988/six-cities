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
  };
  wrapper = shallow(<Content {...props}>{null}</Content>);
});

describe('Content rendering', () => {
  it('should have CSS-class ".page__main--index-empty"', () => {
    expect(wrapper.find('main').hasClass('page__main--index-empty')).toBeTruthy();
  });
  it('don"t should have CSS-class ".page__main--index-empty"', () => {
    wrapper = shallow(<Content isEmpty={false}>{null}</Content>);
    expect(wrapper.find('main').hasClass('page__main--index-empty')).toBeFalsy();
  });
});
