"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lodash_1 = require("lodash");
const Page_1 = require("../components/Page");
const Header_1 = require("../components/Header");
const Logo_1 = require("../components/Logo");
const UserInfo_1 = require("../components/UserInfo");
const Content_1 = require("../components/Content");
const PlaceCardList_1 = require("../components/PlaceCardList");
const Footer_1 = require("../components/Footer");
class FavoriteList extends React.Component {
    constructor() {
        super(...arguments);
        this.handleAddToFavorities = (hotelId) => () => {
            const { onAddOfferToFavorities } = this.props;
            onAddOfferToFavorities(hotelId);
        };
        this.handleRemoveFromFavorities = (hotelId) => () => {
            const { onRemoveOfferFromFavorities } = this.props;
            onRemoveOfferFromFavorities(hotelId);
        };
    }
    render() {
        const { offers, isAuthUser, isEmpty, user } = this.props;
        const cities = lodash_1.keys(offers);
        return (React.createElement(Page_1.default, { className: "page" },
            React.createElement(Header_1.default, { logo: React.createElement(Logo_1.default, { position: "header" }), userInfo: React.createElement(UserInfo_1.default, { avatarUrl: user.avatar_url, email: user.email, isAuth: isAuthUser }) }),
            React.createElement(Content_1.default, { isEmpty: isEmpty, parentClassName: "favorites" }, isEmpty ? (React.createElement(React.Fragment, null,
                React.createElement("h1", { className: "visually-hidden" }, "Favorites (empty)"),
                React.createElement("div", { className: "favorites__status-wrapper" },
                    React.createElement("b", { className: "favorites__status" }, "Nothing yet saved."),
                    React.createElement("p", { className: "favorites__status-description" }, "Save properties to narrow down search or plan yor future trips.")))) : (React.createElement(React.Fragment, null,
                React.createElement("h1", { className: "favorites__title" }, "Saved listing"),
                React.createElement("ul", { className: "favorites__list" }, cities.map((city) => (React.createElement("li", { className: "favorites__locations-items", key: city },
                    React.createElement("div", { className: "favorites__locations locations locations--current" },
                        React.createElement("div", { className: "locations__item" },
                            React.createElement("span", { className: "locations__item-link" },
                                React.createElement("span", null, city)))),
                    React.createElement(PlaceCardList_1.default, { offers: offers[city], parentClassName: "favorites", onAddToFavorities: this.handleAddToFavorities, onRemoveFromFavorities: this.handleRemoveFromFavorities })))))))),
            React.createElement(Footer_1.default, { className: "footer container" },
                React.createElement(Logo_1.default, { height: "33", position: "footer", width: "64" }))));
    }
}
exports.default = FavoriteList;
//# sourceMappingURL=FavoriteList.js.map