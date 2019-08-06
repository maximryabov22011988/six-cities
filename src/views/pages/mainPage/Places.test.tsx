/*
import * as React from 'react';
import renderer from 'react-test-renderer';

import Places from './Places';

const offersMock = [
  {
    id: 1,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    title: 'The Pondhouse - A Magical Place',
    preview_image: `img/apartment-01.jpg`,
    price: 120,
    type: 'house',
    rating: 4.6,
    is_premium: true,
    is_favorite: false,
  },
];

it('Places correctly render', () => {
  const placeCard = renderer
    .create(<Places offers={offersMock} searchResultText="1 places to stay in Paris" />)
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});
*/
