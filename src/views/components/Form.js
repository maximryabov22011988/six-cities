import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  action: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  method: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  action: '#',
  children: null,
};

function Form({ className, action, method, onSubmit, children }) {
  return (
    <form action={action} className={classnames(className, 'form')} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
