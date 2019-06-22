import React from 'react';
import renderer from 'react-test-renderer';

import NavList from './NavList';

const offersMock = [
  {
    id: 1,
    city: 'Paris',
    coords: {
      latitude: 52.38333,
      longitude: 4.9
    }
  }
];

it('NavList correctly render', () => {
  const handleChangeCity = jest.fn();
  const navList = renderer
    .create(
      <NavList
        currentCity="Paris"
        cities={offersMock}
        onChangeCity={handleChangeCity}
      />
    )
    .toJSON();

  expect(navList).toMatchSnapshot();
});
