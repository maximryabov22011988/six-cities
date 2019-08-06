import * as React from 'react';
import cn from 'classnames';

import { CurrentCity, onChangeCity } from '../../../interfaces';

interface Props {
  city: CurrentCity,
  className: string,
  onChangeCity: onChangeCity,
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
