import * as React from 'react';

interface Props {
  className?: string,
  height: string,
  label?: string,
  src: string,
  style?: object,
  width: string,
}

interface State {
  imgStatus: Status.LOADING | Status.SUCCESS | Status.FAILURE
}

enum Status {
  LOADING = 'Loading ...',
  SUCCESS = 'Loaded',
  FAILURE = 'Failed to load :(',
}

class Image extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      imgStatus: Status.LOADING,
    };
  }

  handleImageLoaded = () => {
    this.setState({
      imgStatus: Status.SUCCESS,
    });
  };

  handleImageErrored = () => {
    this.setState({
      imgStatus: Status.FAILURE,
    });
  };

  render() {
    const { className, style, src, width, height, label } = this.props;
    const { imgStatus } = this.state;

    const isLoaded = imgStatus === Status.SUCCESS;

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

export default Image;
