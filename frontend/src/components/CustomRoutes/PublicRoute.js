import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useReduxState from '../../hooks/useReduxState';
import withRouterHOC from './withRouterHOC';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  const { userInfo } = useReduxState();
  console.log('userInfo.flatPrice', userInfo.flatPrice);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          userInfo.flatPrice ? (
            <Redirect to="/expense" />
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
