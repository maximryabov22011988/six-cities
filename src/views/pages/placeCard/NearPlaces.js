import React from 'react';
import PropTypes from 'prop-types';

import PlaceCardList from '../../components/PlaceCardList';
import PlaceCard from '../../components/placeCardList/PlaceCard';

const propTypes = {
  offers: PropTypes.arrayOf(PlaceCard.propTypes.offer).isRequired,
  onAddToFavorities: PropTypes.func.isRequired,
  onRemoveFromFavorities: PropTypes.func.isRequired,
};

function NearPlaces({ offers, onAddToFavorities, onRemoveFromFavorities }) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <PlaceCardList
          offers={offers}
          parentClassName="near-places"
          onAddToFavorities={onAddToFavorities}
          onRemoveFromFavorities={onRemoveFromFavorities}
        />
      </section>
    </div>
  );
}

NearPlaces.propTypes = propTypes;

export default NearPlaces;
