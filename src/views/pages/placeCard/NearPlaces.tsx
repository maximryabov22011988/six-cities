import * as React from 'react';

import PlaceCardList from '../../components/PlaceCardList';

import { Offer, onAddToFavorities, onRemoveFromFavorities } from '../../types';

interface Props {
  offers: Array<Offer>;
  onAddToFavorities: onAddToFavorities;
  onRemoveFromFavorities: onRemoveFromFavorities;
}

function NearPlaces({ offers, onAddToFavorities, onRemoveFromFavorities }: Props) {
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

export default NearPlaces;
