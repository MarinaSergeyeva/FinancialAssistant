import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import routes from '../../assets/routes/routes';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';
import NotFound from '../../pages/NotFound/NotFound';
import userOperations from '../../redux/operations/userOperations';
import Header from '../Header/Header';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, []);
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
            ),
          )}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
