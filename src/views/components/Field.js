import React from 'react';
import cn from 'classnames';

const Field = function(
  { classes, label, id, type = 'text', minLength, maxLength, name, placeholder, disabled, required, onChange },
  ref,
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
        onChange={onChange}
      />
    </div>
  );
};

export default React.forwardRef(Field);
