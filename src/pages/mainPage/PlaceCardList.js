import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from './placeCardList/PlaceCard';

const propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      type: PropTypes.oneOf(['Apartment', 'Private room']),
      rating: PropTypes.number,
      isPremium: PropTypes.bool,
      isBookmark: PropTypes.bool
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
