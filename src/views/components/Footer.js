import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
};

function Footer({ className, children }) {
  return <footer className={className}>{children}</footer>;
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
