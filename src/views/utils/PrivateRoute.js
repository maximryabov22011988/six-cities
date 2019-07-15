import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
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
