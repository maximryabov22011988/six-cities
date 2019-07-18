import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

function Page({ className, name, children }) {
  const classes = cn(className, name && `page page--gray page--${name}`);
  return <div className={classes}>{children}</div>;
}

Page.propTypes = propTypes;

export default Page;
