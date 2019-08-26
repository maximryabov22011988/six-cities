"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const Reviews_1 = require("./Reviews");
const review_1 = require("../../mocks/review");
const reviews = [review_1.default];
it('Reviews renders correctly with mandatory props', () => {
    const tree = renderer.create(React.createElement(Reviews_1.Reviews, { hotelId: 1, reviews: reviews, loadReviews: jest.fn() })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Reviews.test.js.map