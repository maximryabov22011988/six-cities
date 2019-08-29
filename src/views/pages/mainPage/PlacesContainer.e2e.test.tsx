import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import PlacesContainer from './PlacesContainer';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    leftPanel: null,
    rightPanel: null,
    isEmpty: true,
  };
  wrapper = shallow(<PlacesContainer {...props}>{null}</PlacesContainer>);
});

describe('PlacesContainer rendering', () => {
  it('should have CSS-class ".cities__places-container--empty"', () => {
    expect(wrapper.find('.container').hasClass('cities__places-container--empty')).toBeTruthy();
    expect(wrapper.find('.cities__map')).toHaveLength(0);
  });
  it('don"t should have CSS-class ".cities__places-container--empty"', () => {
    wrapper = shallow(
      <PlacesContainer {...props} isEmpty={false}>
        {null}
      </PlacesContainer>
    );
    expect(wrapper.find('.container').hasClass('cities__places-container--empty')).toBeFalsy();
    expect(wrapper.find('.cities__map')).toHaveLength(1);
  });
});
