import * as React from 'react';
import * as renderer from 'react-test-renderer';

import NavItem from './NavItem';
import city from '../../../mocks/city';

it('NavItem renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <NavItem
        city={city}
        className="tabs__item"
        onChangeCity={jest.fn()}
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
