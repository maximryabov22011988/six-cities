/*
import * as React from 'react';
import renderer from 'react-test-renderer';

import NavList from './NavList';

const currentCityMock = {
  name: 'Cologne',
  location: [50.938361, 6.959974],
};

const citiesMock = [
  {
    name: 'Cologne',
    location: [50.938361, 6.959974],
    zoom: 13,
  },
];

it('NavList correctly render', () => {
  const handleChangeCity = jest.fn();
  const navList = renderer
    .create(<NavList cities={citiesMock} currentCity={currentCityMock.name} onChangeCity={handleChangeCity} />)
    .toJSON();

  expect(navList).toMatchSnapshot();
});
*/
