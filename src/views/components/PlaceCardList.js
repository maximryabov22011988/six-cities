import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PlaceCard from './placeCardList/PlaceCard';

const propTypes = {
  offers: PropTypes.arrayOf(PlaceCard.propTypes.offer).isRequired,
  parentClassName: PropTypes.string,
  onActiveOfferClick: PropTypes.func,
  onAddToFavorities: PropTypes.func,
  onRemoveFromFavorities: PropTypes.func,
};

function PlaceCardList({ offers, parentClassName, onActiveOfferClick, onAddToFavorities, onRemoveFromFavorities }) {
  return (
    <div
      className={cn(
        parentClassName === 'favorites' ? 'favorites__places' : 'places__list',
        parentClassName === 'cities' && `${parentClassName}__places-list tabs__content`,
        parentClassName === 'near-places' && `${parentClassName}__list`
      )}
    >
      {offers.map((offer) => (
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

PlaceCardList.propTypes = propTypes;

export default PlaceCardList;
