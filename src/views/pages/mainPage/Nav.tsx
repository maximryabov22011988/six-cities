import * as React from 'react';

interface Props {
  children: React.ReactNode,
}

function Nav({ children = null }: Props) {
  return (
    <div className="cities tabs">
      <section className="locations container">{children}</section>
    </div>
  );
}

export default Nav;
