import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withRouterHOC from './withRouterHOC';
import { homeRoute } from '../../assets/routes/routes';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route {...routeProps}>
    {isAuthenticated ? <Component /> : <Redirect to={homeRoute.path} />}
  </Route>
);

export default withRouterHOC(PrivateRoute);
