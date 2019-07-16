import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
  const mainClasses = classnames(
    'page__main',
    mainClassName && `page__main ${mainClassName}`,
    page && `page__main--${page}`,
  );

  const containerClasses = classnames(
    'container',
    containerClassName && `container ${containerClassName}`,
    page && `page__${page}-container`,
  );

  const sectionClasses = classnames(sectionClassName, page);

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
