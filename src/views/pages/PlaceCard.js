import React from 'react';
import PropTypes from 'prop-types';
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

import withActiveItem from '../hocs/withActiveItem';

import { getCurrentOffer, getNearOffers } from '../../state/offers/selectors';

const MAX_IMAGES = 6;

const propTypes = {
  isAuthUser: PropTypes.bool.isRequired,
  nearOffers: PropTypes.arrayOf(PropTypes.object),
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
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    is_pro: PropTypes.bool,
  }).isRequired,
};

function PlaceCard({ isAuthUser, user: { avatar_url: userAvatarUrl, email }, nearOffers, offer }) {
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
                <BookmarkButton className="property__bookmark-button button" isActive={isFavorite}>
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

              <Rating parentClassName="property" rating={rating} showValue />

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
                <form action="#" className="reviews__form form" method="post">
                  <label className="reviews__label form__label" htmlFor="review">
                    Your review
                  </label>
                  <div className="reviews__rating-form form__rating">
                    <input
                      className="form__rating-input visually-hidden"
                      id="5-stars"
                      name="rating"
                      type="radio"
                      value="5"
                    />
                    <label className="reviews__rating-label form__rating-label" htmlFor="5-stars" title="perfect">
                      <svg className="form__star-image" height="33" width="37">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input
                      className="form__rating-input visually-hidden"
                      id="4-stars"
                      name="rating"
                      type="radio"
                      value="4"
                    />
                    <label className="reviews__rating-label form__rating-label" htmlFor="4-stars" title="good">
                      <svg className="form__star-image" height="33" width="37">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input
                      className="form__rating-input visually-hidden"
                      id="3-stars"
                      name="rating"
                      type="radio"
                      value="3"
                    />
                    <label className="reviews__rating-label form__rating-label" htmlFor="3-stars" title="not bad">
                      <svg className="form__star-image" height="33" width="37">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input
                      className="form__rating-input visually-hidden"
                      id="2-stars"
                      name="rating"
                      type="radio"
                      value="2"
                    />
                    <label className="reviews__rating-label form__rating-label" htmlFor="2-stars" title="badly">
                      <svg className="form__star-image" height="33" width="37">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input
                      className="form__rating-input visually-hidden"
                      id="1-star"
                      name="rating"
                      type="radio"
                      value="1"
                    />
                    <label className="reviews__rating-label form__rating-label" htmlFor="1-star" title="terribly">
                      <svg className="form__star-image" height="33" width="37">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                  </div>
                  <textarea
                    className="reviews__textarea form__textarea"
                    id="review"
                    name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"
                  />
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" disabled="" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <Map className="property__map" currentOffer={offer} fixed offers={nearOffers} />
        </section>

        <NearPlaces offers={nearOffers} />
      </main>
    </div>
  );
}

PlaceCard.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => ({
  offer: getCurrentOffer(state, ownProps),
  nearOffers: getNearOffers(state, ownProps),
});

export default withRouter(connect(mapStateToProps)(PlaceCard));
