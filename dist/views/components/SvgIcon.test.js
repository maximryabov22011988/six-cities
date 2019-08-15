"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const SvgIcon_1 = require("./SvgIcon");
it('SvgIcon renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(SvgIcon_1.default, { name: "icon-test", height: "10", width: "10" })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=SvgIcon.test.js.map