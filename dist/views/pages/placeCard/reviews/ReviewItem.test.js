"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const ReviewItem_1 = require("./ReviewItem");
const review_1 = require("../../../mocks/review");
it('ReviewItem renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(ReviewItem_1.default, { review: review_1.default })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=ReviewItem.test.js.map