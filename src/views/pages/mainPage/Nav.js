import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function Nav({ children }) {
  return (
    <div className="cities tabs">
      <section className="locations container">{children}</section>
    </div>
  );
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
