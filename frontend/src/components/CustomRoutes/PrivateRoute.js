import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withRouterHOC from './withRouterHOC';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route {...routeProps}>
    {isAuthenticated ? <Component /> : <Redirect to="/" />}
  </Route>
);

export default withRouterHOC(PrivateRoute);
