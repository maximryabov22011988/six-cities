"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
var Status;
(function (Status) {
    Status["LOADING"] = "Loading ...";
    Status["SUCCESS"] = "Loaded";
    Status["FAILURE"] = "Failed to load :(";
})(Status || (Status = {}));
class Image extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleImageLoaded = () => {
            this.setState({
                imgStatus: Status.SUCCESS,
            });
        };
        this.handleImageErrored = () => {
            this.setState({
                imgStatus: Status.FAILURE,
            });
        };
        this.state = {
            imgStatus: Status.LOADING,
        };
    }
    render() {
        const { className, style, src, width, height, label } = this.props;
        const { imgStatus } = this.state;
        const isLoaded = imgStatus === Status.SUCCESS;
        return (React.createElement("div", { style: {
                width: `${width}px`,
                height: `${height}px`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#e1e1e1',
                borderRadius: '4px',
            } },
            React.createElement("img", { alt: label, className: className, height: isLoaded ? height : 0, src: src, style: style, width: isLoaded ? width : 0, onError: this.handleImageErrored, onLoad: this.handleImageLoaded }),
            !isLoaded && React.createElement("span", null, imgStatus)));
    }
}
exports.default = Image;
//# sourceMappingURL=Image.js.map