import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  classes: PropTypes.shape({
    wrap: PropTypes.string,
    label: PropTypes.string,
    input: PropTypes.string
  }),
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  type: 'text'
};

function Field({
  classes,
  label,
  id,
  type,
  name,
  placeholder,
  disabled,
  required,
  onChange
}) {
  return (
    <div className={classnames(classes.wrap, 'form__input-wrapper')}>
      <label className={classnames(classes.label, 'form__label')} htmlFor={id}>
        {label}
      </label>
      <input
        className={classnames(classes.input, 'form__input')}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
