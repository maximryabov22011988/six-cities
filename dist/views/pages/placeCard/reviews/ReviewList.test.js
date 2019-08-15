"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const ReviewList_1 = require("./ReviewList");
const review_1 = require("../../../mocks/review");
const reviews = [review_1.default];
it('ReviewList renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(ReviewList_1.default, { reviews: reviews })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=ReviewList.test.js.map