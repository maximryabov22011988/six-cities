import React from 'react';
import classnames from 'classnames';

const Field = function(
  {
    classes,
    label,
    id,
    type = 'text',
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

export default React.forwardRef(Field);
