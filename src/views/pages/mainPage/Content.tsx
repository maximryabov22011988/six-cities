import * as React from 'react';

import cn from 'classnames';

const propTypes = {
  children: PropTypes.node,
  isEmpty: PropTypes.bool,
};

const defaultProps = {
  children: null,
};

function Content({ children, isEmpty }) {
  return (
    <main className={cn('page__main page__main--index', isEmpty && 'page__main--index-empty')}>
      <h1 className="visually-hidden">Cities</h1>
      {children}
    </main>
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
