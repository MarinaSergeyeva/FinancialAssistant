import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useReduxState from '../../hooks/useReduxState';
import withRouterHOC from './withRouterHOC';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  const { userInfo } = useReduxState();
  const { username, flatPrice } = userInfo;
  return (
    <Route {...routeProps}>
      {isAuthenticated && username && routeProps.restricted ? (
        flatPrice ? (
          <Redirect to="/expense" />
        ) : (
          <Redirect to="/plan" />
        )
      ) : (
        <Component />
      )}
    </Route>
  );
};

export default withRouterHOC(PublicRoute);
