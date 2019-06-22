import React from 'react';
import PropTypes from 'prop-types';

import PlaceCardList from './PlaceCardList';
import Select from './Select';

const propTypes = {
  searchResultText: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

const filterOptions = [
  { id: 1, name: 'Popular' },
  { id: 2, name: 'Price: low to high' },
  { id: 3, name: 'Price: high to low' },
  { id: 4, name: 'Top rated first' }
];

const defaultOptionId = 1;

function Places({ searchResultText, offers }) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{searchResultText}</b>
      <Select
        caption="Sort by"
        options={filterOptions}
        defaultOption={defaultOptionId}
      />
      <PlaceCardList offers={offers} />
    </section>
  );
}

Places.propTypes = propTypes;

export default Places;
