import * as React from 'react';

import cn from 'classnames';

const propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
  }).isRequired,
  className: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

function NavItem({ className, city, onChangeCity }) {
  return (
    <li className="locations__item">
      <a className={cn(className, 'locations__item-link')} href="#" onClick={onChangeCity(city)}>
        <span>{city.name}</span>
      </a>
    </li>
  );
}

NavItem.propTypes = propTypes;

export default NavItem;
