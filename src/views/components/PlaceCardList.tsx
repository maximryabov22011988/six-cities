import * as React from 'react';
import cn from 'classnames';

import PlaceCard from './placeCardList/PlaceCard';

import { Offer, onAddToFavorities, onRemoveFromFavorities } from '../types';

interface Props {
  offers: Array<Offer>;
  parentClassName: string;
  onActiveOfferClick?: ((id: number) => (event: React.MouseEvent<HTMLAnchorElement>) => void) | undefined;
  onAddToFavorities: onAddToFavorities;
  onRemoveFromFavorities: onRemoveFromFavorities;
}

function PlaceCardList({
  offers,
  parentClassName,
  onActiveOfferClick,
  onAddToFavorities,
  onRemoveFromFavorities,
}: Props) {
  return (
    <div
      className={cn(
        parentClassName === 'favorites' ? 'favorites__places' : 'places__list',
        parentClassName === 'cities' && `${parentClassName}__places-list tabs__content`,
        parentClassName === 'near-places' && `${parentClassName}__list`
      )}
    >
      {offers &&
        offers.map((offer) => (
          <PlaceCard
            className={parentClassName}
            key={offer.id}
            offer={offer}
            onActiveOfferClick={parentClassName === 'cities' ? onActiveOfferClick(offer.id) : undefined}
            onAddToFavorities={onAddToFavorities}
            onRemoveFromFavorities={onRemoveFromFavorities}
          />
        ))}
    </div>
  );
}

export default PlaceCardList;
