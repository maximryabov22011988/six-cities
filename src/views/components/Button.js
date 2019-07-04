import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool
};
const defaultProps = {
  type: 'button'
};

function Button({ className, type, disabled, children }) {
  return (
    <button
      className={classnames(className, 'button')}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
