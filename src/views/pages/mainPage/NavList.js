import React from 'react';
import PropTypes from 'prop-types';

import withActiveItem from '../../hocs/withActiveItem';
import NavItem from './navList/NavItem';

const propTypes = {
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      city: PropTypes.string,
      coords: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
      })
    })
  ).isRequired,
  onChangeCity: PropTypes.func.isRequired
};

function NavList({ currentCity, cities, onChangeCity }) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map(({ id, city }) => {
        const Item = withActiveItem(NavItem);
        return (
          <Item
            key={id}
            className="tabs__item"
            city={city}
            currentCity={currentCity}
            isActive={city === currentCity}
            onChangeCity={onChangeCity}
          />
        );
      })}
    </ul>
  );
}

NavList.propTypes = propTypes;

export default NavList;
