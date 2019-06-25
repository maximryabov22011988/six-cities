import React from 'react';
import renderer from 'react-test-renderer';

import NavItem from './NavItem';

it('NavItem correctly render', () => {
  const navItem = renderer
    .create(
      <NavItem className="tabs__item" city="Paris" onChangeCity={jest.fn()} />
    )
    .toJSON();

  expect(navItem).toMatchSnapshot();
});
