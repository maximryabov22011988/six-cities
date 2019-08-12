import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Map from './Map';
import offer from '../mocks/offer';

const offers = [offer];

it(`Map correctly render`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const tree = renderer.create(
    <Map offers={offers} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
