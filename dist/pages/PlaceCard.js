"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = require("../components/Header");
const Logo_1 = require("../components/Logo");
const UserInfo_1 = require("../components/UserInfo");
const Label_1 = require("../components/Label");
const Rating_1 = require("../components/Rating");
const Button_1 = require("../components/Button");
const SvgIcon_1 = require("../components/SvgIcon");
const Avatar_1 = require("../components/Avatar");
const Map_1 = require("../components/Map");
const Reviews_1 = require("./placeCard/Reviews");
const NearPlaces_1 = require("./placeCard/NearPlaces");
const AddReviewsForm_1 = require("./placeCard/AddReviewsForm");
const withActiveItem_1 = require("../hocs/withActiveItem");
const operations_1 = require("../../state/reviews/operations");
const selectors_1 = require("../../state/offers/selectors");
const MAX_IMAGES = 6;
function PlaceCard({ isAuthUser, user: { avatar_url: userAvatarUrl, email }, nearOffers, offer, sendReview, addOfferToFavorities, removeOfferFromFavorities, }) {
    const { id, images, title, price, type, bedrooms, host: { avatar_url: avatarUrl, is_pro: isPro, name }, is_favorite: isFavorite, is_premium: isPremium, max_adults: maxAdults, rating, goods, description, } = offer;
    const BookmarkButton = withActiveItem_1.default(Button_1.default);
    const handleAddToFavorities = (hotelId) => () => addOfferToFavorities(hotelId);
    const handleRemoveFromFavorities = (hotelId) => () => removeOfferFromFavorities(hotelId);
    return (React.createElement("div", { className: "page" },
        React.createElement(Header_1.default, { logo: React.createElement(Logo_1.default, { position: "header" }), userInfo: React.createElement(UserInfo_1.default, { avatarUrl: userAvatarUrl, email: email, isAuth: isAuthUser }) }),
        React.createElement("main", { className: "page__main page__main--property" },
            React.createElement("section", { className: "property" },
                React.createElement("div", { className: "property__gallery-container container" },
                    React.createElement("div", { className: "property__gallery" }, images.map((src, i) => {
                        if (i < MAX_IMAGES) {
                            return (React.createElement("div", { className: "property__image-wrapper", key: i },
                                React.createElement("img", { alt: "Hotel interior", className: "property__image", src: src })));
                        }
                        return null;
                    }))),
                React.createElement("div", { className: "property__container container" },
                    React.createElement("div", { className: "property__wrapper" },
                        React.createElement(Label_1.default, { isShow: isPremium, name: "Premium", parentClassName: "property" }),
                        React.createElement("div", { className: "property__name-wrapper" },
                            React.createElement("h1", { className: "property__name" }, title),
                            React.createElement(BookmarkButton, { className: "property__bookmark-button", isActive: isFavorite, onClick: isFavorite ? handleRemoveFromFavorities(id) : handleAddToFavorities(id) },
                                React.createElement(SvgIcon_1.default, { className: "property__bookmark-icon", height: "33", isShowLabel: false, label: isFavorite ? 'In bookmarks' : 'To bookmarks', name: "icon-bookmark", width: "31" }))),
                        React.createElement(Rating_1.default, { isShowValue: true, parentClassName: "property", rating: rating }),
                        React.createElement("ul", { className: "property__features" },
                            React.createElement("li", { className: "property__feature property__feature--entire" }, type),
                            React.createElement("li", { className: "property__feature property__feature--bedrooms" },
                                bedrooms,
                                " Bedrooms"),
                            React.createElement("li", { className: "property__feature property__feature--adults" },
                                "Max ",
                                maxAdults,
                                " adults")),
                        React.createElement("div", { className: "property__price" },
                            React.createElement("b", { className: "property__price-value" },
                                "\u20AC",
                                price),
                            React.createElement("span", { className: "property__price-text" }, "\u00A0night")),
                        React.createElement("div", { className: "property__inside" },
                            React.createElement("h2", { className: "property__inside-title" }, "What's inside"),
                            React.createElement("ul", { className: "property__inside-list" }, goods.map((good, i) => (React.createElement("li", { className: "property__good-item", key: i }, good))))),
                        React.createElement("div", { className: "property__host" },
                            React.createElement("h2", { className: "property__host-title" }, "Meet the host"),
                            React.createElement("div", { className: "property__host-user user" },
                                React.createElement(Avatar_1.default, { alt: "Host avatar", height: "74", isPro: isPro, name: name, parentClassName: "property", showStatus: true, src: avatarUrl, width: "74" })),
                            React.createElement("div", { className: "property__description" },
                                React.createElement("p", { className: "property__text" }, description))),
                        React.createElement("section", { className: "property__reviews reviews" },
                            React.createElement(Reviews_1.default, { hotelId: id }),
                            isAuthUser && React.createElement(AddReviewsForm_1.default, { hotelId: id, onSendReview: sendReview })))),
                React.createElement(Map_1.default, { className: "property__map", currentOffer: offer, fixed: true, offers: nearOffers })),
            React.createElement(NearPlaces_1.default, { offers: nearOffers, onAddToFavorities: handleAddToFavorities, onRemoveFromFavorities: handleRemoveFromFavorities }))));
}
const mapStateToProps = (state, ownProps) => ({
    offer: selectors_1.getCurrentOffer(state, ownProps),
    nearOffers: selectors_1.getNearOffers(state, ownProps),
});
const mapDispatchToProps = {
    sendReview: operations_1.sendReview,
};
exports.default = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PlaceCard));
//# sourceMappingURL=PlaceCard.js.map