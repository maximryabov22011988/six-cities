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
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  type: 'text'
};

const Field = function(
  {
    classes,
    label,
    id,
    type,
    minLength,
    maxLength,
    name,
    placeholder,
    disabled,
    required,
    onChange
  },
  ref
) {
  return (
    <div className={classnames(classes.wrap, 'form__input-wrapper')}>
      <label className={classnames(classes.label, 'form__label')} htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        className={classnames(classes.input, 'form__input')}
        id={id}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default React.forwardRef(Field);
