import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.element.isRequired
};

function PrivateRoute({ component: Component, isAuth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;
