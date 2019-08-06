"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReviewItem_1 = require("./ReviewItem");
const REVIEWS_MAX = 10;
function ReviewList({ reviews }) {
    return (React.createElement("ul", { className: "reviews__list" }, reviews.map((review, i) => {
        if (i < REVIEWS_MAX) {
            return React.createElement(ReviewItem_1.default, { key: review.id, review: review });
        }
        return null;
    })));
}
exports.default = ReviewList;
//# sourceMappingURL=ReviewList.js.map