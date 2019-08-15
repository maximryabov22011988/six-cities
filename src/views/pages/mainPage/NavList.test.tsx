import * as React from 'react';
import * as renderer from 'react-test-renderer';

import NavList from './NavList';
import city from '../../mocks/city';

const cities = [city];

it('NavList renders correctly with mandatory props', () => {
  const tree = renderer
    .create(
      <NavList
        cities={cities}
        currentCity="Paris"
        onChangeCity={jest.fn()}
      />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
