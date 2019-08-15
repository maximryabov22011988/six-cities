"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const classnames_1 = require("classnames");
const lodash_1 = require("lodash");
const SvgIcon_1 = require("./SvgIcon");
const name_spaces_1 = require("../../state/name-spaces");
class Notification extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
        };
        this.handleHide = (evt) => {
            evt.preventDefault();
            this.setState({
                show: false,
            });
        };
    }
    componentDidUpdate(prevProps) {
        const { show } = this.props;
        if (prevProps.show !== show && show === true) {
            this.setState({
                show: true,
            });
            this.timer = window.setTimeout(() => {
                this.setState({
                    show: false,
                });
            }, 5000);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        const { message } = this.props;
        const { show } = this.state;
        return (React.createElement("div", { className: classnames_1.default('notification', show && 'notification--show') },
            React.createElement("span", null,
                React.createElement(SvgIcon_1.default, { height: "20", name: "icon-error", width: "20" }),
                "Error"),
            React.createElement("button", { className: "notification__btn-close", onClick: this.handleHide },
                React.createElement(SvgIcon_1.default, { height: "14", name: "icon-close", width: "14" })),
            message));
    }
}
exports.Notification = Notification;
const mapStateToProps = (state) => ({
    show: Boolean(lodash_1.get(state[name_spaces_1.default.APP], 'errors', false)),
    message: lodash_1.get(state[name_spaces_1.default.APP], 'errors.message', ''),
});
exports.default = react_redux_1.connect(mapStateToProps)(Notification);
//# sourceMappingURL=Notification.js.map