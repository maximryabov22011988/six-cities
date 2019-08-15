"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classnames_1 = require("classnames");
const withActiveItem_1 = require("../../../hocs/withActiveItem");
const keyCodes_1 = require("../../../constants/keyCodes");
class Select extends React.Component {
    constructor(props) {
        super(props);
        this.selectRef = React.createRef();
        this.handleOpen = () => {
            this.setState({
                isOpen: true,
            });
        };
        this.handleClose = () => {
            this.setState({
                isOpen: false,
            });
        };
        this.handleOutsideClick = (evt) => {
            evt.preventDefault();
            const { target } = evt;
            const { isOpen } = this.state;
            if (isOpen && !this.selectRef.current.contains(target)) {
                this.handleClose();
            }
        };
        this.handleOptionClick = (id) => (evt) => {
            const { nativeEvent } = evt;
            const { onChangeSorting } = this.props;
            if (nativeEvent.which === keyCodes_1.MOUSE_LEFT_BUTTON || nativeEvent.which === keyCodes_1.ENTER) {
                this.setState({
                    currentOption: id,
                }, () => onChangeSorting(this.getCurrentOptionText()));
                this.handleClose();
            }
        };
        this.handleEscPress = (evt) => {
            const { nativeEvent } = evt;
            if (nativeEvent && nativeEvent.which === keyCodes_1.ESC) {
                this.handleClose();
            }
        };
        this.renderOptionItems = (options, currentOption) => {
            return options.map(({ id, name }) => {
                const Option = ({ className, onClick, onKeyUp, children }) => (React.createElement("li", { className: className, tabIndex: 0, onClick: onClick, onKeyUp: onKeyUp }, children));
                const WrappedOption = withActiveItem_1.default(Option);
                return (React.createElement(WrappedOption, { className: "places__option", isActive: currentOption === id, key: id, onClick: this.handleOptionClick(id), onKeyUp: this.handleOptionClick(id) }, name));
            });
        };
        this.state = {
            currentOption: props.defaultOption,
            isOpen: false,
        };
    }
    componentDidMount() {
        window.addEventListener('click', this.handleOutsideClick);
        window.addEventListener('keydown', this.handleEscPress);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.handleOutsideClick);
        window.addEventListener('keydown', this.handleEscPress);
    }
    getCurrentOptionText() {
        const { currentOption } = this.state;
        const { options } = this.props;
        return options.find((item) => item.id === currentOption).name;
    }
    render() {
        const { currentOption, isOpen } = this.state;
        const { caption, options } = this.props;
        return (React.createElement("div", { className: "places__sorting", ref: this.selectRef, tabIndex: 0, onClick: this.handleOutsideClick, onKeyDown: this.handleEscPress },
            caption && React.createElement("span", { className: "places__sorting-caption" }, caption),
            React.createElement("span", { className: "places__sorting-type", tabIndex: 0, onClick: this.handleOpen, onFocus: this.handleOpen },
                this.getCurrentOptionText(),
                React.createElement("svg", { className: "places__sorting-arrow", height: "4", width: "7" },
                    React.createElement("use", { xlinkHref: "#icon-arrow-select" }))),
            isOpen && (React.createElement("ul", { className: classnames_1.default('places__options places__options--custom', isOpen && 'places__options--opened') }, this.renderOptionItems(options, currentOption)))));
    }
}
exports.default = Select;
//# sourceMappingURL=Select.js.map