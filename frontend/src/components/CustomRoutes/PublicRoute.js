import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withRouterHOC from './withRouterHOC';
import useReduxState from '../../hooks/useReduxState';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  const { userInfo } = useReduxState();
  const { flatPrice } = userInfo;
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          !flatPrice ? (
            <Redirect to="/plan" />
          ) : (
            <Redirect to="/plan" />
          )
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default withRouterHOC(PublicRoute);
