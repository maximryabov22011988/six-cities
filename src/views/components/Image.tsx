import * as React from 'react';


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
    this.state = {
      imgStatus: status.LOADING,
    };
  }

  handleImageLoaded = () => {
    this.setState({
      imgStatus: status.SUCCESS,
    });
  };

  handleImageErrored = () => {
    this.setState({
      imgStatus: status.FAILURE,
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
          borderRadius: '4px',
        }}
      >
        <img
          alt={label}
          className={className}
          height={isLoaded ? height : 0}
          src={src}
          style={style}
          width={isLoaded ? width : 0}
          onError={this.handleImageErrored}
          onLoad={this.handleImageLoaded}
        />
        {!isLoaded && <span>{imgStatus}</span>}
      </div>
    );
  }
}

Image.propTypes = propTypes;

export default Image;
