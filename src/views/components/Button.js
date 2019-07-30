import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  type: 'button',
};

function Button({ className, type, disabled, children, onClick }) {
  return (
    <button className={cn(className, 'button')} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
