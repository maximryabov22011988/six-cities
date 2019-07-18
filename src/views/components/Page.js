import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
  className: PropTypes.string,
  page: PropTypes.string,
};

const defaultProps = {
  children: null,
};

function Page({ className, page, children }) {
  const classes = cn(className, page && `page page--gray page--${page}`);
  return <div className={classes}>{children}</div>;
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
