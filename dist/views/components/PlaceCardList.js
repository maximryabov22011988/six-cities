"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const PlaceCard_1 = require("./placeCardList/PlaceCard");
function PlaceCardList({ offers, parentClassName, onActiveOfferClick, onAddToFavorities, onRemoveFromFavorities, }) {
    return (React.createElement("div", { className: classnames_1.default(parentClassName === 'favorites' ? 'favorites__places' : 'places__list', parentClassName === 'cities' && `${parentClassName}__places-list tabs__content`, parentClassName === 'near-places' && `${parentClassName}__list`) }, offers &&
        offers.map((offer) => (React.createElement(PlaceCard_1.default, { className: parentClassName, key: offer.id, offer: offer, onActiveOfferClick: parentClassName === 'cities' ? onActiveOfferClick(offer.id) : undefined, onAddToFavorities: onAddToFavorities, onRemoveFromFavorities: onRemoveFromFavorities })))));
}
exports.default = PlaceCardList;
//# sourceMappingURL=PlaceCardList.js.map