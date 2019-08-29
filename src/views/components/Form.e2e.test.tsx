import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Form from './Form';

const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;

beforeEach(() => {
  props = {
    className: 'login__form',
    method: 'get',
    onSubmit: jest.fn(),
  };
  wrapper = shallow(<Form {...props}>{null}</Form>);
});

describe('Form rendering', () => {
  it('should has class ".form"', () => {
    expect(wrapper.find('form').hasClass('form')).toBeTruthy();
  });
});

describe('Form interactions', () => {
  it('should call onSubmit', () => {
    const handleSubmit = jest.fn();
    wrapper = shallow(
      <Form {...props} onSubmit={handleSubmit}>
        {null}
      </Form>
    );
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
