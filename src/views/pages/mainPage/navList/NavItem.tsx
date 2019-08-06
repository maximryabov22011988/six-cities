import * as React from 'react';
import cn from 'classnames';

import { City, onChangeCity } from '../../../interfaces';

interface Props {
  city: City;
  className: string;
  onChangeCity: onChangeCity;
}

function NavItem({ className, city, onChangeCity }: Props) {
  return (
    <li className="locations__item">
      <a className={cn(className, 'locations__item-link')} href="#" onClick={onChangeCity(city)}>
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default NavItem;
