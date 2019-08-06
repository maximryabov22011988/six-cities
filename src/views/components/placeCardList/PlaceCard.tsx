import * as React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Label from '../Label';
import Button from '../Button';
import Image from '../Image';
import Rating from '../Rating';
import SvgIcon from '../SvgIcon';

import withActiveItem from '../../hocs/withActiveItem';

import { Offer, onAddToFavorities, onRemoveFromFavorities } from '../../interfaces';

interface Props {
  className: string,
  offer: Offer,
  onActiveOfferClick: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | undefined,
  onAddToFavorities: onAddToFavorities,
  onRemoveFromFavorities: onRemoveFromFavorities,
}

function PlaceCard({
  className,
  offer,
  onActiveOfferClick,
  onAddToFavorities,
  onRemoveFromFavorities,
}: Props) {
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
      className={cn(
        'place-card',
        className === 'cities' && `${className}__place-card`,
        className === 'near-places' && `${className}__card`,
        className === 'favorites' && `${className}__card`
      )}
    >
      <Label isShow={isPremium} name="Premium" parentClassName="place-card" />

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#" onClick={onActiveOfferClick}>
          <Image
            className="place-card__image"
            height={className === 'favorites' ? '110' : '200'}
            label="Place image"
            src={previewImage}
            width={className === 'favorites' ? '150' : '260'}
          />
        </a>
      </div>

      <div className={cn('place-card__info', className === 'favorites' && `${className}__card-info`)}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton
            className="place-card__bookmark-button"
            isActive={isFavorite}
            onClick={isFavorite ? onRemoveFromFavorities(id) : onAddToFavorities(id)}
          >
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

export default PlaceCard;
