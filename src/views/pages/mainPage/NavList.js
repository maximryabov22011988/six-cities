import React from 'react';
import PropTypes from 'prop-types';

import withActiveItem from '../../hocs/withActiveItem';
import NavItem from './navList/NavItem';

const propTypes = {
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number
    })
  ).isRequired,
  onChangeCity: PropTypes.func.isRequired
};

function NavList({ currentCity, cities, onChangeCity }) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map(city => {
        const WrappedNavItem = withActiveItem(NavItem);
        return (
          <WrappedNavItem
            key={city.name}
            className="tabs__item"
            city={city}
            isActive={city.name === currentCity}
            onChangeCity={onChangeCity}
          />
        );
      })}
    </ul>
  );
}

NavList.propTypes = propTypes;

export default NavList;
