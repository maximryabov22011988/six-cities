import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from './placeCardList/PlaceCard';

const propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired
};

class PlaceCardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null
    };
  }

  handleImageClick = offer => () => {
    this.setState({
      currentOffer: offer
    });
  };

  handleTitleClick = () => {};

  handleMouseEnter = offer => () => {
    this.setState({
      currentOffer: offer
    });
  };

  handleMouseLeave = () => {
    this.setState({
      currentOffer: null
    });
  };

  render() {
    const { offers } = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map(offer => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onTitleClick={this.handleTitleClick}
            onImageClick={this.handleImageClick}
            onMouseEnter={this.handleMouseEnter(offer)}
            onMouseLeave={this.handleMouseLeave}
          />
        ))}
      </div>
    );
  }
}

PlaceCardList.propTypes = propTypes;

export default PlaceCardList;
