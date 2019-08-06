import * as React from 'react';

import { keys } from 'lodash';

import Page from '../components/Page';
import Header from '../components/Header';
import Logo from '../components/Logo';
import UserInfo from '../components/UserInfo';
import Content from '../components/Content';
import PlaceCardList from '../components/PlaceCardList';
import Footer from '../components/Footer';

import { User, onAddToFavorities, onRemoveFromFavorities } from '../interfaces';

interface Props {
  isAuthUser: boolean;
  isEmpty: boolean;
  offers: object;
  user: User;
  onAddOfferToFavorities: onAddToFavorities;
  onRemoveOfferFromFavorities: onRemoveFromFavorities;
}

class FavoriteList extends React.Component<Props> {
  handleAddToFavorities = (hotelId) => () => {
    const { onAddOfferToFavorities } = this.props;
    onAddOfferToFavorities(hotelId);
  };

  handleRemoveFromFavorities = (hotelId) => () => {
    const { onRemoveOfferFromFavorities } = this.props;
    onRemoveOfferFromFavorities(hotelId);
  };

  render() {
    const { offers, isAuthUser, isEmpty, user } = this.props;
    const cities = keys(offers);

    return (
      <Page className="page">
        <Header
          logo={<Logo position="header" />}
          userInfo={<UserInfo avatarUrl={user.avatar_url} email={user.email} isAuth={isAuthUser} />}
        />
        <Content isEmpty={isEmpty} parentClassName="favorites">
          {isEmpty ? (
            <React.Fragment>
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan yor future trips.
                </p>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {cities.map((city) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <span className="locations__item-link">
                          <span>{city}</span>
                        </span>
                      </div>
                    </div>
                    <PlaceCardList
                      offers={offers[city]}
                      parentClassName="favorites"
                      onAddToFavorities={this.handleAddToFavorities}
                      onRemoveFromFavorities={this.handleRemoveFromFavorities}
                    />
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )}
        </Content>
        <Footer className="footer container">
          <Logo height="33" position="footer" width="64" />
        </Footer>
      </Page>
    );
  }
}

export default FavoriteList;
