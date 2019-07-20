import React from 'react';
import PropTypes from 'prop-types';

import PlaceCardList from '../../components/PlaceCardList';
import Select from './places/Select';

import { SORTING_OPTIONS } from '../../constants/options';

const propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      bedrooms: PropTypes.number,
      city: PropTypes.shape({
        name: PropTypes.string,
        location: PropTypes.object,
      }),
      description: PropTypes.string,
      goods: PropTypes.arrayOf(PropTypes.string),
      host: PropTypes.shape({
        avatar_url: PropTypes.string,
        id: PropTypes.number,
        is_pro: PropTypes.bool,
        name: PropTypes.string,
      }),
      id: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string),
      is_favorite: PropTypes.bool,
      is_premium: PropTypes.bool,
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number,
      }),
      max_adults: PropTypes.number,
      preview_image: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
      title: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
  searchResultText: PropTypes.string.isRequired,
  onActiveOfferClick: PropTypes.func.isRequired,
  onChangeSorting: PropTypes.func.isRequired,
};

const defaultOptionId = 1; // Popular

function Places({ searchResultText, offers, onActiveOfferClick, onChangeSorting }) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{searchResultText}</b>
      <Select
        caption="Sort by"
        defaultOption={defaultOptionId}
        options={SORTING_OPTIONS}
        onChangeSorting={onChangeSorting}
      />
      <PlaceCardList offers={offers} parentClassName="cities" onActiveOfferClick={onActiveOfferClick} />
    </section>
  );
}

Places.propTypes = propTypes;

export default Places;
