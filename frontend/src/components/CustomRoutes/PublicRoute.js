import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withRouterHOC from './withRouterHOC';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/plan" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default withRouterHOC(PublicRoute);
