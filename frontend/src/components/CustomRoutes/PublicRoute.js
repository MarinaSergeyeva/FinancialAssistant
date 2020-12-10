import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useReduxState from '../../hooks/useReduxState';
import withRouterHOC from './withRouterHOC';
import { expenseRoute, planRoute } from '../../assets/routes/routes';

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
          <Redirect to={expenseRoute.path} />
        ) : (
          <Redirect to={planRoute.path} />
        )
      ) : (
        <Component />
      )}
    </Route>
  );
};

export default withRouterHOC(PublicRoute);
