import * as React from 'react';

import cn from 'classnames';

const propTypes = {
  classes: PropTypes.shape({
    input: PropTypes.string,
    label: PropTypes.string,
    wrap: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  type: 'text',
};

const Field = function(
  { classes, label, id, type, minLength, maxLength, name, placeholder, disabled, required, value, onChange },
  ref
) {
  return (
    <div className={cn(classes.wrap, 'form__input-wrapper')}>
      <label className={cn(classes.label, 'form__label')} htmlFor={id}>
        {label}
      </label>
      <input
        className={cn(classes.input, 'form__input')}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        ref={ref}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default React.forwardRef(Field);
