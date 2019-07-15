import React from 'react';
import renderer from 'react-test-renderer';

import NavItem from './NavItem';

const cityMock = {
  name: 'Cologne',
  location: [50.938361, 6.959974],
  zoom: 13,
};

it('NavItem correctly render', () => {
  const handleChangeCity = jest.fn();
  const navItem = renderer
    .create(
      <NavItem
        className="tabs__item"
        city={cityMock}
        onChangeCity={handleChangeCity}
      />,
    )
    .toJSON();

  expect(navItem).toMatchSnapshot();
});
