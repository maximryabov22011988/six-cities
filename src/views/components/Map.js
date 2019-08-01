import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';
import { get } from 'lodash';

import PlaceCard from './placeCardList/PlaceCard';

const mapContainerId = 'map';

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

const popupOptions = {
  className: 'custom-popup',
};

const LEAFLET_LAYER = {
  URL_TEMPLATE: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  OPTIONS: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
};

const propTypes = {
  activeOffer: PropTypes.number,
  className: PropTypes.string,
  currentOffer: PropTypes.oneOfType([PlaceCard.propTypes.offer, PropTypes.any]),
  offers: PropTypes.arrayOf(PlaceCard.propTypes.offer),
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
    const { activeOffer, currentOffer, offers } = this.props;
    const defaultIcon = this.pinIcon;
    const activeIcon = this.activePinIcon;

    if (currentOffer) {
      const {
        location: { latitude, longitude },
        title,
      } = currentOffer;
      const mostRemoteOffer = offers[2];

      Leaflet.marker([latitude, longitude], { icon: activeIcon })
        .addTo(group)
        .bindPopup(title, popupOptions)
        .openPopup();

      Leaflet.circle([latitude, longitude], {
        color: '#FF9000',
        fillColor: '#FF9000',
        fillOpacity: 0.1,
        radius: get(mostRemoteOffer, 'distance') * 1000,
      }).addTo(group);
    }

    offers.forEach(({ id, location: { latitude, longitude }, title }) => {
      const icon = activeOffer && id === activeOffer ? activeIcon : defaultIcon;
      Leaflet.marker([latitude, longitude], { icon })
        .addTo(group)
        .bindPopup(title, popupOptions);
    });
  }

  render() {
    const { className, fixed } = this.props;
    return <div className={className} id={mapContainerId} style={fixed ? mapStyles.fixed : mapStyles.flexible} />;
  }
}

Map.propTypes = propTypes;

export default Map;
