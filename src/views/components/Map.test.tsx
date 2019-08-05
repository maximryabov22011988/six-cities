import * as React from 'react';
import renderer from 'react-test-renderer';

import Map from './Map';

const offersMock = [
  {
    city: {
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
  },
];

it(`Map correctly render`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const map = renderer.create(<Map offers={offersMock} />).toJSON();

  expect(map).toMatchSnapshot();
});
