import React from 'react';
import renderer from 'react-test-renderer';

import LocationList from '../LocationList';

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

it('LocationList correctly render', () => {
  const handleChangeCity = jest.fn();
  const locationList = renderer
    .create(
      <LocationList
        currentCity="Paris"
        cities={offersMock}
        onChangeCity={handleChangeCity}
      />
    )
    .toJSON();

  expect(locationList).toMatchSnapshot();
});
