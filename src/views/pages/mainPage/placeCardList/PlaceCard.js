import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import withActiveItem from '../../../hocs/withActiveItem';
import Button from '../../../components/Button';
import Rating from './placeCard/Rating';

const propTypes = {
  offer: PropTypes.shape({
    bedrooms: PropTypes.number,
    city: PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.object
    }),
    description: PropTypes.string,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatar_url: PropTypes.string,
      id: PropTypes.number,
      is_pro: PropTypes.bool,
      name: PropTypes.string
    }),
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    is_favorite: PropTypes.bool,
    is_premium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
    max_adults: PropTypes.number,
    preview_image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

function PlaceCard(props) {
  const {
    className,
    offer,
    onTitleClick,
    onImageClick,
    onMouseEnter,
    onMouseLeave
  } = props;

  const {
    title,
    preview_image: previewImage,
    price,
    type,
    rating,
    is_premium: isPremium,
    is_favorite: isFavorite
  } = offer;

  const BookmarkButton = withActiveItem(Button);

  return (
    <article
      className={classnames('cities__place-card place-card', className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={onImageClick(offer)}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton
            className="place-card__bookmark-button"
            isActive={isFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </BookmarkButton>
        </div>

        <Rating rating={rating} />

        <h2 className="place-card__name">
          <a href="#" onClick={onTitleClick}>
            {title}
          </a>
        </h2>

        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = propTypes;

export default PlaceCard;
