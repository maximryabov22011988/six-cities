import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import Logo from '../components/Logo';
import UserInfo from '../components/UserInfo';
import Label from '../components/Label';
import Rating from '../components/Rating';
import Button from '../components/Button';
import SvgIcon from '../components/SvgIcon';
import Avatar from '../components/Avatar';
import Map from '../components/Map';

import Reviews from './placeCard/Reviews';
import NearPlaces from './placeCard/NearPlaces';
import AddReviewsForm from './placeCard/AddReviewsForm';

import withActiveItem from '../hocs/withActiveItem';

import { sendReview } from '../../state/reviews/operations';
import { getCurrentOffer, getNearOffers } from '../../state/offers/selectors';

import { User, Offer, onAddToFavorities, onRemoveFromFavorities } from '../interfaces';

const MAX_IMAGES = 6;

interface Props {
  addOfferToFavorities: onAddToFavorities,
  isAuthUser: boolean,
  nearOffers: Array<Offer>,
  offer: Offer,
  removeOfferFromFavorities: onRemoveFromFavorities,
  sendReview: () => void,
  user:User,
}

function PlaceCard({
  isAuthUser,
  user: { avatar_url: userAvatarUrl, email },
  nearOffers,
  offer,
  sendReview,
  addOfferToFavorities,
  removeOfferFromFavorities,
}: Props) {
  const {
    id,
    images,
    title,
    price,
    type,
    bedrooms,
    host: { avatar_url: avatarUrl, is_pro: isPro, name },
    is_favorite: isFavorite,
    is_premium: isPremium,
    max_adults: maxAdults,
    rating,
    goods,
    description,
  } = offer;

  const BookmarkButton = withActiveItem(Button);

  const handleAddToFavorities = (hotelId) => () => addOfferToFavorities(hotelId);
  const handleRemoveFromFavorities = (hotelId) => () => removeOfferFromFavorities(hotelId);

  return (
    <div className="page">
      <Header
        logo={<Logo position="header" />}
        userInfo={<UserInfo avatarUrl={userAvatarUrl} email={email} isAuth={isAuthUser} />}
      />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((src, i) => {
                if (i < MAX_IMAGES) {
                  return (
                    <div className="property__image-wrapper" key={i}>
                      <img alt="Hotel interior" className="property__image" src={src} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper">
              <Label isShow={isPremium} name="Premium" parentClassName="property" />

              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <BookmarkButton
                  className="property__bookmark-button"
                  isActive={isFavorite}
                  onClick={isFavorite ? handleRemoveFromFavorities(id) : handleAddToFavorities(id)}
                >
                  <SvgIcon
                    className="property__bookmark-icon"
                    height="33"
                    isShowLabel={false}
                    label={isFavorite ? 'In bookmarks' : 'To bookmarks'}
                    name="icon-bookmark"
                    width="31"
                  />
                </BookmarkButton>
              </div>

              <Rating isShowValue parentClassName="property" rating={rating} />

              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
              </ul>

              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, i) => (
                    <li className="property__good-item" key={i}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>

                <div className="property__host-user user">
                  <Avatar
                    alt="Host avatar"
                    height="74"
                    isPro={isPro}
                    name={name}
                    parentClassName="property"
                    showStatus
                    src={avatarUrl}
                    width="74"
                  />
                </div>

                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>

              <section className="property__reviews reviews">
                <Reviews hotelId={id} />
                {isAuthUser && <AddReviewsForm hotelId={id} onSendReview={sendReview} />}
              </section>
            </div>
          </div>
          <Map className="property__map" currentOffer={offer} fixed offers={nearOffers} />
        </section>

        <NearPlaces
          offers={nearOffers}
          onAddToFavorities={handleAddToFavorities}
          onRemoveFromFavorities={handleRemoveFromFavorities}
        />
      </main>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  offer: getCurrentOffer(state, ownProps),
  nearOffers: getNearOffers(state, ownProps),
});

const mapDispatchToProps = {
  sendReview,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlaceCard)
);
