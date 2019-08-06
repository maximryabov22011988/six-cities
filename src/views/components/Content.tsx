import * as React from 'react';
import cn from 'classnames';

interface Props {
  children: React.ReactNode,
  isEmpty?: boolean,
  parentClassName?: string,
}

function Content({ isEmpty, parentClassName, children = null }: Props) {
  const mainClasses = cn(
    'page__main',
    parentClassName && `page__main--${parentClassName}`,
    isEmpty && parentClassName === 'favorites' && `page__main--${parentClassName}-empty`
  );

  const containerClasses = cn('container', parentClassName && `page__${parentClassName}-container`);

  const sectionClasses = cn(parentClassName, isEmpty && parentClassName === 'favorites' && `${parentClassName}--empty`);

  return (
    <main className={mainClasses}>
      <div className={containerClasses}>
        <section className={sectionClasses}>{children}</section>
      </div>
    </main>
  );
}

export default Content;
