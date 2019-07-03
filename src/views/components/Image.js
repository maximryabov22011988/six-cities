import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

const status = {
  LOADING: 'Loading ...',
  SUCCESS: 'Loaded',
  FAILURE: 'Failed to load :('
};

class Image extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imgStatus: status.LOADING
    };
  }

  handleImageLoaded = () => {
    this.setState({
      imgStatus: status.SUCCESS
    });
  };

  handleImageErrored = () => {
    this.setState({
      imgStatus: status.FAILURE
    });
  };

  render() {
    const { className, style, src, width, height, label } = this.props;
    const { imgStatus } = this.state;

    const isLoaded = imgStatus === status.SUCCESS;

    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#e1e1e1',
          borderRadius: '4px'
        }}
      >
        <img
          className={className}
          style={style}
          src={src}
          width={isLoaded ? width : 0}
          height={isLoaded ? height : 0}
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}
          alt={label}
        />
        {!isLoaded && <span>{imgStatus}</span>}
      </div>
    );
  }
}

Image.propTypes = propTypes;

export default Image;
