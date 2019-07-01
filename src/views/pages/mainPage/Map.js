import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Leaflet from 'leaflet';

const mapStyles = {
  top: '15px',
  height: '794px'
};

const LEAFLET_LAYER = {
  URL_TEMPLATE:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  OPTIONS: {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }
};

// const propTypes = {
//   offers: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       title: PropTypes.string,
//       image: PropTypes.string,
//       price: PropTypes.number,
//       type: PropTypes.oneOf(['Apartment', 'Private room']),
//       rating: PropTypes.number,
//       isPremium: PropTypes.bool,
//       isBookmark: PropTypes.bool,
//       location: PropTypes.arrayOf(PropTypes.number)
//     })
//   ).isRequired
// };

class Map extends Component {
  constructor(props) {
    super(props);

    this.leaflet = Leaflet;

    this.icon = this.leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [27, 39],
      iconAnchor: [13, 39]
    });
  }

  componentDidMount() {
    const { offers } = this.props;

    if (offers.length > 0) {
      this.map = this.leaflet.map(
        'map',
        {
          center: [
            offers[0].city.location.latitude,
            offers[0].city.location.longitude
          ],
          zoom: offers[0].city.location.zoom,
          zoomControl: false,
          layers: new this.leaflet.TileLayer(
            LEAFLET_LAYER.URL_TEMPLATE,
            LEAFLET_LAYER.OPTIONS
          )
        },
        100
      );

      this.markers = this.leaflet.layerGroup().addTo(this.map);
      this.addMarkers(offers, this.markers);
    }
  }

  componentDidUpdate() {
    const { offers } = this.props;

    if (this.map) {
      this.map.setView(
        [offers[0].city.location.latitude, offers[0].city.location.longitude],
        offers[0].city.location.zoom
      );
      this.markers.clearLayers();
      this.addMarkers(offers, this.markers);
    }
  }

  addMarkers(offers, group) {
    offers.map(offer => {
      this.leaflet
        .marker([offer.location.latitude, offer.location.longitude], {
          icon: this.icon
        })
        .addTo(group);
    });
  }

  render() {
    return <div id="map" style={mapStyles} />;
  }
}

// Map.propTypes = propTypes;

export default Map;
