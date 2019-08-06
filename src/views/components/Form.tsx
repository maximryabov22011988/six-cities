import * as React from 'react';
import cn from 'classnames';

interface Props {
  action?: string,
  children: React.ReactNode,
  className: string,
  method: string,
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
}

function Form({ className, action, method, onSubmit, children = null}: Props) {
  return (
    <form action={action} className={cn(className, 'form')} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
