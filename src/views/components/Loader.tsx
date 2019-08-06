import * as React from 'react';
import { connect } from 'react-redux';

import nameSpace from '../../state/name-spaces';

interface Props {
  isLoading: boolean;
}

const wrapStyles = {
  position: 'fixed' as 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 10000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255, 0.85)',
};

class Loader extends React.Component<Props> {
  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <div style={wrapStyles}>
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  isLoading: state[nameSpace.APP].isLoading,
});

export default connect(mapStateToProps)(Loader);
