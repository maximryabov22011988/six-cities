import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import * as ReactRouter from 'react-router';

const Route = ReactRouterDOM.Route;
const Redirect = ReactRouterDOM.Redirect;

interface PrivateRouteProps extends ReactRouter.RouteProps {
  component: any,
  isAuth: boolean,
}

function PrivateRoute({ component: Component, isAuth, ...rest }: PrivateRouteProps) {
  return <Route {...rest} render={(routeProps) => (isAuth ? <Component {...routeProps} /> : <Redirect to="/login" />)} />;
}

export default PrivateRoute;
