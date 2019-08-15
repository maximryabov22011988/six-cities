"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const Loader_1 = require("./Loader");
it('Loader renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(Loader_1.Loader, { isLoading: true })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Loader.test.js.map