import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Rating from './placeCard/Rating';

const propTypes = PropTypes.shape({
  offer: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.oneOf(['Apartment', 'Private room']),
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
    isBookmark: PropTypes.bool
  }),
  onTitleClick: PropTypes.func,
  onImageClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}).isRequired;

function PlaceCard(props) {
  const {
    className,
    offer,
    onTitleClick,
    onImageClick,
    onMouseEnter,
    onMouseLeave
  } = props;
  const { title, image, price, type, rating, isPremium, isBookmark } = offer;

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
            src={image}
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
          <button
            className={classnames(
              'place-card__bookmark-button button',
              isBookmark && 'place-card__bookmark-button--active'
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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
