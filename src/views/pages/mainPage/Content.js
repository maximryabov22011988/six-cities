import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

const defaultProps = {
  children: null,
};

function Content({ children }) {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      {children}
    </main>
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
