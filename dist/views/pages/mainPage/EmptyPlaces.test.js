"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const EmptyPlaces_1 = require("./EmptyPlaces");
it('EmptyPlaces renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(EmptyPlaces_1.default, { city: "Paris" })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=EmptyPlaces.test.js.map