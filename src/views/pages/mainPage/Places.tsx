import * as React from 'react';

import PlaceCardList from '../../components/PlaceCardList';
import Select from './places/Select';

import { SORTING_OPTIONS } from '../../constants/options';

import { Offer, onAddToFavorities, onRemoveFromFavorities } from '../../interfaces';

interface Props {
  offers: Array<Offer>,
  searchResultText: string,
  onActiveOfferClick?: ((id: number) => (event: React.MouseEvent<HTMLAnchorElement>) => void) | undefined,
  onAddToFavorities: onAddToFavorities,
  onChangeSorting: (sorting: string) => void,
  onRemoveFromFavorities: onRemoveFromFavorities,
}

const defaultOptionId = 1; // Popular

function Places({
  searchResultText,
  offers,
  onActiveOfferClick,
  onAddToFavorities,
  onChangeSorting,
  onRemoveFromFavorities,
}: Props) {
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

export default Places;
