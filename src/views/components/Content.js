import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
  children: PropTypes.element,
  containerClassName: PropTypes.string,
  mainClassName: PropTypes.string,
  page: PropTypes.string,
  sectionClassName: PropTypes.string,
};

const defaultProps = {
  children: null,
};

function Content({ mainClassName, containerClassName, sectionClassName, page, children }) {
  const mainClasses = cn('page__main', mainClassName && `page__main ${mainClassName}`, page && `page__main--${page}`);

  const containerClasses = cn(
    'container',
    containerClassName && `container ${containerClassName}`,
    page && `page__${page}-container`,
  );

  const sectionClasses = cn(sectionClassName, page);

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
