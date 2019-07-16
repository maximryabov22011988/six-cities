import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/Page';
import Header from '../components/Header';
import Logo from '../components/Logo';
import UserInfo from '../components/UserInfo';
import Content from '../components/Content';

import Footer from './favoriteList/Footer';

const propTypes = {
  isAuthUser: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
};

function FavoriteList({ isAuthUser, user }) {
  return (
    <Page className="page">
      <Header
        logo={<Logo position="header" />}
        userInfo={<UserInfo avatarUrl={user.avatar_url} email={user.email} isAuth={isAuthUser} />}
      />
      <Content page="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              <article className="favorites__card place-card">
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      alt="Place image"
                      className="place-card__image"
                      height="110"
                      src="img/apartment-small-03.jpg"
                      width="150"
                    />
                  </a>
                </div>
                <div className="favorites__card-info place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button
                      className="place-card__bookmark-button place-card__bookmark-button--active button"
                      type="button"
                    >
                      <svg className="place-card__bookmark-icon" height="19" width="18">
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '100%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
              <article className="favorites__card place-card">
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      alt="Place image"
                      className="place-card__image"
                      height="110"
                      src="img/room-small.jpg"
                      width="150"
                    />
                  </a>
                </div>
                <div className="favorites__card-info place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button
                      className="place-card__bookmark-button place-card__bookmark-button--active button"
                      type="button"
                    >
                      <svg className="place-card__bookmark-icon" height="19" width="18">
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '80%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>
            </div>
          </li>
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Cologne</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              <article className="favorites__card place-card">
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      alt="Place image"
                      className="place-card__image"
                      height="110"
                      src="img/apartment-small-04.jpg"
                      width="150"
                    />
                  </a>
                </div>
                <div className="favorites__card-info place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button
                      className="place-card__bookmark-button place-card__bookmark-button--active button"
                      type="button"
                    >
                      <svg className="place-card__bookmark-icon" height="19" width="18">
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '100%' }} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">White castle</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </li>
        </ul>
      </Content>
      <Footer className="footer container">
        <Logo height="33" position="footer" width="64" />
      </Footer>
    </Page>
  );
}

FavoriteList.propTypes = propTypes;

export default FavoriteList;
