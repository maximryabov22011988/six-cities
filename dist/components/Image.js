'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const propTypes = {
  className: PropTypes.string,
  height: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  width: PropTypes.string.isRequired,
};
const status = {
  LOADING: 'Loading ...',
  SUCCESS: 'Loaded',
  FAILURE: 'Failed to load :(',
};
class Image extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleImageLoaded = () => {
      this.setState({
        imgStatus: status.SUCCESS,
      });
    };
    this.handleImageErrored = () => {
      this.setState({
        imgStatus: status.FAILURE,
      });
    };
    this.state = {
      imgStatus: status.LOADING,
    };
  }
  render() {
    const { className, style, src, width, height, label } = this.props;
    const { imgStatus } = this.state;
    const isLoaded = imgStatus === status.SUCCESS;
    return React.createElement(
      'div',
      {
        style: {
          width: `${width}px`,
          height: `${height}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#e1e1e1',
          borderRadius: '4px',
        },
      },
      React.createElement('img', {
        alt: label,
        className: className,
        height: isLoaded ? height : 0,
        src: src,
        style: style,
        width: isLoaded ? width : 0,
        onError: this.handleImageErrored,
        onLoad: this.handleImageLoaded,
      }),
      !isLoaded && React.createElement('span', null, imgStatus)
    );
  }
}
Image.propTypes = propTypes;
exports.default = Image;
//# sourceMappingURL=Image.js.map
