import * as React from 'react';
import cn from 'classnames';

interface Props {
  children: React.ReactNode,
  className: string,
  disabled?: boolean,
  type?: 'button' | 'reset' | 'submit',
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

function Button({ className, type = 'button', disabled, children, onClick }: Props) {
  return (
    <button className={cn(className, 'button')} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
