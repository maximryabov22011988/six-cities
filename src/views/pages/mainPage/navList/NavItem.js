import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired
};

function NavItem({ className, city, onChangeCity }) {
  return (
    <li className="locations__item">
      <a
        className={classnames(className, 'locations__item-link')}
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
