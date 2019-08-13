'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const PlaceCardList_1 = require('../../components/PlaceCardList');
function NearPlaces({ offers, onAddToFavorities, onRemoveFromFavorities }) {
  return React.createElement(
    'div',
    { className: 'container' },
    React.createElement(
      'section',
      { className: 'near-places places' },
      React.createElement('h2', { className: 'near-places__title' }, 'Other places in the neighbourhood'),
      React.createElement(PlaceCardList_1.default, {
        offers: offers,
        parentClassName: 'near-places',
        onAddToFavorities: onAddToFavorities,
        onRemoveFromFavorities: onRemoveFromFavorities,
      })
    )
  );
}
exports.default = NearPlaces;
//# sourceMappingURL=NearPlaces.js.map
