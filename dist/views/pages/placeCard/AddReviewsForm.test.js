"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const AddReviewsForm_1 = require("./AddReviewsForm");
it('AddReviewsForm renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(AddReviewsForm_1.default, { hotelId: 1, onSendReview: jest.fn() })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=AddReviewsForm.test.js.map