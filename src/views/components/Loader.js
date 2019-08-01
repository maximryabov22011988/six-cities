import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import nameSpace from '../../state/name-spaces';

const propTypes = {
  isLoading: PropTypes.bool,
};

const wrapStyles = {
  position: 'fixed',
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

class Loader extends React.Component {
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

Loader.propTypes = propTypes;

const mapStateToProps = (state) => ({
  isLoading: state[nameSpace.APP].isLoading,
});

export default connect(mapStateToProps)(Loader);
