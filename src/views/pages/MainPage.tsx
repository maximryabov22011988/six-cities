import * as React from 'react';

import Page from '../components/Page';
import Header from '../components/Header';
import Logo from '../components/Logo';
import UserInfo from '../components/UserInfo';

import Content from './mainPage/Content';
import Nav from './mainPage/Nav';
import NavList from './mainPage/NavList';
import PlacesContainer from './mainPage/PlacesContainer';
import Places from './mainPage/Places';
import EmptyPlaces from './mainPage/EmptyPlaces';
import Map from '../components/Map';

import { OfferCity, City, User, Offer } from '../interfaces';

interface Props {
  addOfferToFavorities: (hotelId: number) => void;
  changeCity: (city: City) => void;
  changeSorting: (sorting: string) => void;
  cities: Array<City>;
  currentCity: OfferCity;
  isAuthUser: boolean;
  offers: Array<Offer>;
  removeOfferFromFavorities: (hotelId: number) => void;
  user: User;
}

interface State {
  activeOffer: number;
}

class MainPage extends React.Component<Props, State> {
  state = {
    activeOffer: null,
  };

  getSearchResultsText() {
    const { currentCity, offers } = this.props;
    return `${offers.length} places to stay in ${currentCity.name}`;
  }

  handleActiveOfferClick = (id) => (evt) => {
    evt.preventDefault();
    this.setState({
      activeOffer: id,
    });
  };

  handleAddToFavorities = (hotelId) => () => {
    const { addOfferToFavorities } = this.props;
    addOfferToFavorities(hotelId);
  };

  handleRemoveFromFavorities = (hotelId) => () => {
    const { removeOfferFromFavorities } = this.props;
    removeOfferFromFavorities(hotelId);
  };

  handleChangeCity = (city) => (evt) => {
    evt.preventDefault();
    const { changeCity } = this.props;
    changeCity(city);
  };

  handleChangeSorting = (sorting) => {
    const { changeSorting } = this.props;
    changeSorting(sorting);
  };

  havePlaceCards() {
    const { offers } = this.props;
    return offers.length > 0;
  }

  render() {
    const { user, isAuthUser, currentCity, cities, offers } = this.props;
    const { activeOffer } = this.state;

    return (
      <Page parentClassName="main">
        <Header
          logo={<Logo isActive position="header" />}
          userInfo={<UserInfo avatarUrl={user.avatar_url} email={user.email} isAuth={isAuthUser} />}
        />
        <Content isEmpty={!this.havePlaceCards()}>
          <Nav>
            <NavList cities={cities} currentCity={currentCity.name} onChangeCity={this.handleChangeCity} />
          </Nav>
          <PlacesContainer
            isEmpty={!this.havePlaceCards()}
            leftPanel={
              this.havePlaceCards() ? (
                <Places
                  offers={offers}
                  searchResultText={this.getSearchResultsText()}
                  onActiveOfferClick={this.handleActiveOfferClick}
                  onAddToFavorities={this.handleAddToFavorities}
                  onChangeSorting={this.handleChangeSorting}
                  onRemoveFromFavorities={this.handleRemoveFromFavorities}
                />
              ) : (
                <EmptyPlaces city={currentCity.name} />
              )
            }
            rightPanel={<Map activeOffer={activeOffer} offers={offers} />}
          />
        </Content>
      </Page>
    );
  }
}

export default MainPage;
