import * as React from 'react';

interface Props {
  children: React.ReactNode;
  className: string;
}

function Footer({ className, children = null }: Props) {
  return <footer className={className}>{children}</footer>;
}

export default Footer;
