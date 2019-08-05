'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const leaflet_1 = require('leaflet');
const lodash_1 = require('lodash');
const PlaceCard_1 = require('./placeCardList/PlaceCard');
const mapContainerId = 'map';
const ACTIVE_PIN_COLOR = '#FF9000';
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
  currentOffer: PropTypes.oneOfType([PlaceCard_1.default.propTypes.offer, PropTypes.any]),
  offers: PropTypes.arrayOf(PlaceCard_1.default.propTypes.offer),
};
class Map extends React.Component {
  componentDidMount() {
    const { currentOffer, offers } = this.props;
    const { latitude, longitude, zoom } = offers ? offers[0].city.location : currentOffer.location;
    const settings = {
      center: [latitude, longitude],
      zoom,
      zoomControl: false,
    };
    this.offerMap = leaflet_1.default.map(mapContainerId, settings);
    this.offerMap.setView([latitude, longitude], zoom);
    leaflet_1.default.tileLayer(LEAFLET_LAYER.URL_TEMPLATE, LEAFLET_LAYER.OPTIONS).addTo(this.offerMap);
    this.pinGroup = leaflet_1.default.layerGroup().addTo(this.offerMap);
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
    return leaflet_1.default.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [27, 39],
      iconAnchor: [13, 39],
    });
  }
  get activePinIcon() {
    return leaflet_1.default.icon({
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
      leaflet_1.default
        .marker([latitude, longitude], { icon: activeIcon })
        .addTo(group)
        .bindPopup(title, popupOptions)
        .openPopup();
      leaflet_1.default
        .circle([latitude, longitude], {
          color: ACTIVE_PIN_COLOR,
          fillColor: ACTIVE_PIN_COLOR,
          fillOpacity: 0.1,
          radius: lodash_1.get(mostRemoteOffer, 'distance') * 1000,
        })
        .addTo(group);
    }
    offers.forEach(({ id, location: { latitude, longitude }, title }) => {
      const icon = activeOffer && id === activeOffer ? activeIcon : defaultIcon;
      leaflet_1.default
        .marker([latitude, longitude], { icon })
        .addTo(group)
        .bindPopup(title, popupOptions);
    });
  }
  render() {
    const { className, fixed } = this.props;
    return React.createElement('div', {
      className: className,
      id: mapContainerId,
      style: fixed ? mapStyles.fixed : mapStyles.flexible,
    });
  }
}
Map.propTypes = propTypes;
exports.default = Map;
//# sourceMappingURL=Map.js.map
