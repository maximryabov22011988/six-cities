import React from 'react';
import PropTypes from 'prop-types';

import PlaceCardList from '../../components/PlaceCardList';
import PlaceCard from '../../components/placeCardList/PlaceCard';
import Select from './places/Select';

import { SORTING_OPTIONS } from '../../constants/options';

const propTypes = {
  offers: PropTypes.arrayOf(PlaceCard.propTypes.offer).isRequired,
  searchResultText: PropTypes.string.isRequired,
  onActiveOfferClick: PropTypes.func.isRequired,
  onAddToFavorities: PropTypes.func.isRequired,
  onChangeSorting: PropTypes.func.isRequired,
  onRemoveFromFavorities: PropTypes.func.isRequired,
};

const defaultOptionId = 1; // Popular

function Places({
  searchResultText,
  offers,
  onActiveOfferClick,
  onAddToFavorities,
  onChangeSorting,
  onRemoveFromFavorities,
}) {
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
      <PlaceCardList
        offers={offers}
        parentClassName="cities"
        onActiveOfferClick={onActiveOfferClick}
        onAddToFavorities={onAddToFavorities}
        onRemoveFromFavorities={onRemoveFromFavorities}
      />
    </section>
  );
}

Places.propTypes = propTypes;

export default Places;
