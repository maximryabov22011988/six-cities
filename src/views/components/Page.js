import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  parentClassName: PropTypes.string,
};

function Page({ className, parentClassName, children }) {
  const classes = cn(className, parentClassName && `page page--gray page--${parentClassName}`);
  return <div className={classes}>{children}</div>;
}

Page.propTypes = propTypes;

export default Page;
