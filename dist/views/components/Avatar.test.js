"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const Avatar_1 = require("./Avatar");
it('Avatar renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(Avatar_1.default, { alt: "User avatar", name: "info@test.ru", parentClassName: "header", src: "/img" })).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Avatar.test.js.map