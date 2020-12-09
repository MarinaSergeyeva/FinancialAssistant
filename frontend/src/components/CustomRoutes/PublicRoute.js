import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useReduxState from '../../hooks/useReduxState';
import withRouterHOC from './withRouterHOC';

const PublicRoute = ({
  userData,
  component: Component,
  isAuthenticated,
  ...routeProps
}) => {
  const { userInfo } = useReduxState();
  const { username, flatPrice } = userData;
  console.log('isAuthenticated', isAuthenticated);
  console.log('userInfo.flatPrice', flatPrice);
  console.log('username', username);
  console.dir(userData);
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
