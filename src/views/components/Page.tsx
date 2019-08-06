import * as React from 'react';
import cn from 'classnames';

interface Props {
  children: React.ReactNode,
  className?: string,
  parentClassName?: string,
}

function Page({ className, parentClassName, children }: Props) {
  const classes = cn(className, parentClassName && `page page--gray page--${parentClassName}`);
  return <div className={classes}>{children}</div>;
}

export default Page;
