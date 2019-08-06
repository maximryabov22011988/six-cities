import * as React from 'react';

import NavItem from './navList/NavItem';

import withActiveItem from '../../hocs/withActiveItem';

import { CurrentCity, onChangeCity } from '../../interfaces';

interface Props {
  cities: Array<CurrentCity>,
  currentCity: string,
  onChangeCity: onChangeCity,
}

function NavList({ currentCity, cities, onChangeCity }: Props) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        const WrappedNavItem = withActiveItem(NavItem);
        return (
          <WrappedNavItem
            city={city}
            className="tabs__item"
            isActive={city.name === currentCity}
            key={city.name}
            onChangeCity={onChangeCity}
          />
        );
      })}
    </ul>
  );
}

export default NavList;
