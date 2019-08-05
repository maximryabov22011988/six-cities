import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
  children: PropTypes.node,
  isEmpty: PropTypes.bool,
  parentClassName: PropTypes.string,
};

const defaultProps = {
  children: null,
};

function Content({ isEmpty, parentClassName, children }) {
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

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
