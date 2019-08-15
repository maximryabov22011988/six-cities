"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const Rating_1 = require("./Rating");
it('Rating renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(Rating_1.default, { currentRating: "1", onChange: jest.fn() })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Rating.test.js.map