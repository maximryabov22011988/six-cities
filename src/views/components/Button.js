import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};
const defaultProps = {
  type: 'button',
};

function Button({ className, type, disabled, children }) {
  return (
    <button className={classnames(className, 'button')} disabled={disabled} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
