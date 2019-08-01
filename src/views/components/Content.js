import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
  children: PropTypes.element,
  containerClassName: PropTypes.string,
  isEmpty: PropTypes.bool,
  mainClassName: PropTypes.string,
  parentClassName: PropTypes.string,
  sectionClassName: PropTypes.string,
};

const defaultProps = {
  children: null,
};

function Content({ mainClassName, containerClassName, isEmpty, sectionClassName, parentClassName, children }) {
  const mainClasses = cn(
    'page__main',
    mainClassName && `page__main ${mainClassName}`,
    parentClassName && `page__main--${parentClassName}`,
    isEmpty && parentClassName === 'favorites' && `page__main--${parentClassName}-empty`
  );

  const containerClasses = cn(
    'container',
    containerClassName && `container ${containerClassName}`,
    parentClassName && `page__${parentClassName}-container`
  );

  const sectionClasses = cn(
    sectionClassName,
    parentClassName,
    isEmpty && parentClassName === 'favorites' && `${parentClassName}--empty`
  );

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
