import * as React from 'react';
import cn from 'classnames';

interface Props {
  classes?: {
    input: string,
    label: string,
    wrap: string,
  },
  disabled?: boolean,
  id?: string,
  label?: string,
  maxLength?: number,
  minLength?: number,
  name?: string,
  placeholder?: string,
  required?: boolean,
  type: string,
  value: string,
  onChange: (event: React.FormEvent<HTMLInputElement>) => void,
  ref?: React.RefObject<HTMLInputElement>
}

const Field: React.ComponentType<Props> = React.forwardRef(({ classes, label, id, type = 'text', minLength, maxLength, name, placeholder, disabled, required, value, onChange }: Props, ref?: React.Ref<HTMLInputElement>) => (
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
));

export default Field;
