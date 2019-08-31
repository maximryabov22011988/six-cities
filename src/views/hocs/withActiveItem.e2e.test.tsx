import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import withActiveItem from './withActiveItem';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

const MockComponent = () => <div />;

let MockComponentWrapped;
let wrapper;
let props;

beforeEach(() => {
  props = {
    className: 'link',
    isActive: false,
  };
  MockComponentWrapped = withActiveItem(MockComponent);
  wrapper = shallow(<MockComponentWrapped {...props} />);
});

describe('withActiveItem rendering', () => {
  it('should has not ".link--active"', () => {
    expect(wrapper.find('.link').hasClass('link--active')).toBeFalsy();
  });
  it('should has ".link--active"', () => {
    wrapper = shallow(<MockComponentWrapped {...props} isActive={true} />);
    expect(wrapper.find('.link').hasClass('link--active')).toBeTruthy();
  });
});
