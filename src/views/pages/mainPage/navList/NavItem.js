import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  currentCity: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired
};

function NavItem({ currentCity, city, onChangeCity }) {
  return (
    <li className="locations__item">
      <a
        className={classnames(
          'locations__item-link tabs__item',
          city === currentCity && 'tabs__item--active'
        )}
        href="#"
        onClick={onChangeCity(city)}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

NavItem.propTypes = propTypes;

export default NavItem;
