"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const PlacesContainer_1 = require("./PlacesContainer");
it('PlacesContainer renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(PlacesContainer_1.default, { isEmpty: false, leftPanel: null, rightPanel: null })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=PlacesContainer.test.js.map