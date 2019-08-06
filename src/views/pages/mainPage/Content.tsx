import * as React from 'react';
import cn from 'classnames';

interface Props {
  children: React.ReactNode,
  isEmpty: boolean,
}

function Content({ children = null, isEmpty }: Props) {
  return (
    <main className={cn('page__main page__main--index', isEmpty && 'page__main--index-empty')}>
      <h1 className="visually-hidden">Cities</h1>
      {children}
    </main>
  );
}

export default Content;
