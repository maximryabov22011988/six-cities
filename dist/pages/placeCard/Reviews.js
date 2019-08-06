"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const ReviewList_1 = require("./reviews/ReviewList");
const operations_1 = require("../../../state/reviews/operations");
const selectors_1 = require("../../../state/reviews/selectors");
class Reviews extends React.Component {
    componentDidMount() {
        const { hotelId, loadReviews } = this.props;
        loadReviews(hotelId);
    }
    getReviewsAmount() {
        const { reviews } = this.props;
        return reviews.length;
    }
    render() {
        const { reviews } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", { className: "reviews__title" },
                "Reviews \u00B7 ",
                React.createElement("span", { className: "reviews__amount" }, this.getReviewsAmount())),
            React.createElement(ReviewList_1.default, { reviews: reviews })));
    }
}
exports.Reviews = Reviews;
const mapStateToProps = (state) => ({
    reviews: selectors_1.getReviews(state),
});
const mapDispatchToProps = {
    loadReviews: operations_1.loadReviews,
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Reviews);
//# sourceMappingURL=Reviews.js.map