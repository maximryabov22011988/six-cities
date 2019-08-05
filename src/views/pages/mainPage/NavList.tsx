import * as React from 'react';


import NavItem from './navList/NavItem';

import withActiveItem from '../../hocs/withActiveItem';

const propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number,
    })
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

function NavList({ currentCity, cities, onChangeCity }) {
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

NavList.propTypes = propTypes;

export default NavList;
