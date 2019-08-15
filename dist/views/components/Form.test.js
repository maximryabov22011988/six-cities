"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const Form_1 = require("./Form");
it('Form renders correctly with mandatory props', () => {
    const tree = renderer
        .create(React.createElement(Form_1.default, { className: "login__form", method: "get", onSubmit: jest.fn() }, null)).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Form.test.js.map