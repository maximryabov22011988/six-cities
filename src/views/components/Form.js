import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  action: PropTypes.string,
  method: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any,
};

const defaultProps = {
  action: '#',
  children: null,
};

function Form({ className, action, method, onSubmit, children }) {
  return (
    <form
      className={classnames(className, 'form')}
      action={action}
      method={method}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
