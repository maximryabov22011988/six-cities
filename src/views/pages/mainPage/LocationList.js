import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

function LocationList({ currentCity, cities, onChangeCity }) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map(({ id, city }) => (
        <li key={id} className="locations__item">
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
      ))}
    </ul>
  );
}

LocationList.propTypes = propTypes;

export default LocationList;
