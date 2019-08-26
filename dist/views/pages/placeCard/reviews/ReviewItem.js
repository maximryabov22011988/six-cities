"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const moment = require("moment");
const lodash_1 = require("lodash");
const Avatar_1 = require("../../../components/Avatar");
const Rating_1 = require("../../../components/Rating");
const getDateFormat = (date) => {
    if (date) {
        return {
            dateTime: moment(date).format('YYYY-MM-DD'),
            text: moment(date).format('MMMM YYYY'),
        };
    }
    return null;
};
function ReviewItem({ review: { comment, date, rating, user: { avatar_url: avatarUrl, is_pro: isPro, name }, }, }) {
    return (React.createElement("li", { className: "reviews__item" },
        React.createElement("div", { className: "reviews__user user" },
            React.createElement(Avatar_1.default, { alt: "Review author avatar", height: "54", isPro: isPro, name: name, parentClassName: "reviews", src: avatarUrl, width: "54" })),
        React.createElement("div", { className: "reviews__info" },
            React.createElement(Rating_1.default, { parentClassName: "reviews", rating: rating }),
            React.createElement("p", { className: "reviews__text" }, comment),
            React.createElement("time", { className: "reviews__time", dateTime: lodash_1.get(getDateFormat(date), 'dateTime', '') }, lodash_1.get(getDateFormat(date), 'text', '')))));
}
exports.default = ReviewItem;
//# sourceMappingURL=ReviewItem.js.map