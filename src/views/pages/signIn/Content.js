import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element
};

const defaultProps = {
  children: null
};

function Content({ children }) {
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">{children}</section>
      </div>
    </main>
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
