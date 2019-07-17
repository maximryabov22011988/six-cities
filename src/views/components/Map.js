import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';

const radiusInKm = 3;

const circleStyles = {
  color: '#FF9000',
  fillColor: '#FF9000',
  fillOpacity: 0.1,
  radius: radiusInKm * 1000,
};

const mapStyles = {
  fixed: {
    top: 0,
    zIndex: 100,
    width: '1144px',
    height: '580px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  flexible: {
    top: 0,
    height: '100%',
    zIndex: 100,
  },
};

const mapContainerId = 'map';

const LEAFLET_LAYER = {
  URL_TEMPLATE: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  OPTIONS: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
};

const propTypes = {
  className: PropTypes.string,
  currentOffer: PropTypes.shape({
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
  }),
  offers: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ),
};

class Map extends Component {
  componentDidMount() {
    const { currentOffer, offers } = this.props;

    const { latitude, longitude, zoom } = offers ? offers[0].city.location : currentOffer.location;

    const settings = {
      center: [latitude, longitude],
      zoom,
      zoomControl: false,
    };

    this.offerMap = Leaflet.map(mapContainerId, settings);
    this.offerMap.setView([latitude, longitude], zoom);
    Leaflet.tileLayer(LEAFLET_LAYER.URL_TEMPLATE, LEAFLET_LAYER.OPTIONS).addTo(this.offerMap);
    this.pinGroup = Leaflet.layerGroup().addTo(this.offerMap);
    this.addPins(this.pinGroup);
  }

  componentDidUpdate() {
    const { currentOffer, offers } = this.props;

    const { latitude, longitude, zoom } = offers ? offers[0].city.location : currentOffer.location;

    if (this.offerMap) {
      this.offerMap.setView([latitude, longitude], zoom);
      this.pinGroup.clearLayers();
      this.addPins(this.pinGroup);
    }
  }

  get pinIcon() {
    return Leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [27, 39],
      iconAnchor: [13, 39],
    });
  }

  get activePinIcon() {
    return Leaflet.icon({
      iconUrl: 'img/pin-active.svg',
      iconSize: [27, 39],
      iconAnchor: [13, 39],
    });
  }

  addPins(group) {
    const { currentOffer, offers } = this.props;
    const icon = this.pinIcon;
    const activeIcon = this.activePinIcon;

    if (currentOffer) {
      const {
        location: { latitude, longitude },
      } = currentOffer;
      Leaflet.marker([latitude, longitude], { icon: activeIcon }).addTo(group);
      Leaflet.circle([latitude, longitude], circleStyles).addTo(group);
    }

    offers.forEach(({ location: { latitude, longitude } }) => {
      Leaflet.marker([latitude, longitude], { icon }).addTo(group);
    });
  }

  render() {
    const { className, fixed } = this.props;
    return <div className={className} id={mapContainerId} style={fixed ? mapStyles.fixed : mapStyles.flexible} />;
  }
}

Map.propTypes = propTypes;

export default Map;
