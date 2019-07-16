import React from 'react';
import classnames from 'classnames';

const Field = function(
  { classes, label, id, type = 'text', minLength, maxLength, name, placeholder, disabled, required, onChange },
  ref,
) {
  return (
    <div className={classnames(classes.wrap, 'form__input-wrapper')}>
      <label className={classnames(classes.label, 'form__label')} htmlFor={id}>
        {label}
      </label>
      <input
        className={classnames(classes.input, 'form__input')}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        ref={ref}
        required={required}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default React.forwardRef(Field);
