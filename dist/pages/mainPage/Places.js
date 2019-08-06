"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PlaceCardList_1 = require("../../components/PlaceCardList");
const Select_1 = require("./places/Select");
const options_1 = require("../../constants/options");
const defaultOptionId = 1; // Popular
function Places({ searchResultText, offers, onActiveOfferClick, onAddToFavorities, onChangeSorting, onRemoveFromFavorities, }) {
    return (React.createElement("section", { className: "cities__places places" },
        React.createElement("h2", { className: "visually-hidden" }, "Places"),
        React.createElement("b", { className: "places__found" }, searchResultText),
        React.createElement(Select_1.default, { caption: "Sort by", defaultOption: defaultOptionId, options: options_1.SORTING_OPTIONS, onChangeSorting: onChangeSorting }),
        React.createElement(PlaceCardList_1.default, { offers: offers, parentClassName: "cities", onActiveOfferClick: onActiveOfferClick, onAddToFavorities: onAddToFavorities, onRemoveFromFavorities: onRemoveFromFavorities })));
}
exports.default = Places;
//# sourceMappingURL=Places.js.map