import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  page: PropTypes.string,
  children: PropTypes.element
};

const defaultProps = {
  children: null
};

function Page({ className, page, children }) {
  const classes = classnames(
    className,
    page && `page page--gray page--${page}`
  );
  return <div className={classes}>{children}</div>;
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
