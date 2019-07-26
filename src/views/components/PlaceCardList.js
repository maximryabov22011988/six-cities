import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PlaceCard from './placeCardList/PlaceCard';

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
    })
  ).isRequired,
  parentClassName: PropTypes.string,
  onActiveOfferClick: PropTypes.func,
};

function PlaceCardList({ offers, parentClassName, onActiveOfferClick }) {
  return (
    <div
      className={cn(
        'places__list',
        parentClassName === 'cities' && `${parentClassName}__places-list tabs__content`,
        parentClassName === 'near-places' && `${parentClassName}__list`
      )}
    >
      {offers.map((offer) => (
        <PlaceCard
          className={parentClassName}
          key={offer.id}
          offer={offer}
          onActiveOfferClick={parentClassName === 'cities' && onActiveOfferClick(offer.id)}
        />
      ))}
    </div>
  );
}

PlaceCardList.propTypes = propTypes;

export default PlaceCardList;
