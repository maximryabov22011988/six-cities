import React, { Component } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const mapStyles = {
  top: '15px',
  height: '794px'
};

const DEFAULT_MAP_ZOOM = 12;

const LEAFLET_LAYER = {
  URL_TEMPLATE:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  OPTIONS: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }
};

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
      isBookmark: PropTypes.bool,
      location: PropTypes.arrayOf(PropTypes.number)
    })
  ).isRequired,
  city: PropTypes.arrayOf(PropTypes.number).isRequired
};

class Map extends Component {
  constructor(props) {
    super(props);

    this.settings = {
      center: props.city,
      zoom: DEFAULT_MAP_ZOOM,
      zoomControl: false,
      marker: true
    };
  }

  componentDidMount() {
    this.initCard();
  }

  get pinIcon() {
    return leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 40]
    });
  }

  addPins() {
    const { offers } = this.props;
    const icon = this.pinIcon;
    offers.forEach(({ location, title }) => {
      leaflet.marker(location, { icon, title }).addTo(this.offerMap);
    });
  }

  initCard() {
    const { settings } = this;
    const { city } = this.props;

    this.offerMap = leaflet.map('map', settings);
    this.offerMap.setView(city, DEFAULT_MAP_ZOOM);
    leaflet
      .tileLayer(LEAFLET_LAYER.URL_TEMPLATE, LEAFLET_LAYER.OPTIONS)
      .addTo(this.offerMap);

    this.addPins();
  }

  render() {
    return <div id="map" style={mapStyles} />;
  }
}

Map.propTypes = propTypes;

export default Map;
