import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import withActiveItem from '../../../hocs/withActiveItem';
import Label from '../../../components/Label';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import Rating from '../../../components/Rating';
import SvgIcon from '../../../components/SvgIcon';

const propTypes = {
  offer: PropTypes.shape({
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
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

function PlaceCard({
  className,
  offer,
  // onTitleClick,
  onImageClick,
  onMouseEnter,
  onMouseLeave,
}) {
  const {
    id,
    title,
    preview_image: previewImage,
    price,
    type,
    rating,
    is_premium: isPremium,
    is_favorite: isFavorite,
  } = offer;

  const BookmarkButton = withActiveItem(Button);

  return (
    <article
      className={classnames('cities__place-card place-card', className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Label isShow={isPremium} name="Premium" parentClassName="place-card" />

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#" onClick={onImageClick(offer)}>
          <Image className="place-card__image" height="200" label="Place image" src={previewImage} width="260" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton className="place-card__bookmark-button" isActive={isFavorite}>
            <SvgIcon
              className="place-card__bookmark-icon"
              height="19"
              isShowLabel={false}
              label={isFavorite ? 'In bookmarks' : 'To bookmarks'}
              name="icon-bookmark"
              width="18"
            />
          </BookmarkButton>
        </div>

        <Rating parentClassName="place-card" rating={rating} />

        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>

        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = propTypes;

export default PlaceCard;
