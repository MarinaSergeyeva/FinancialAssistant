import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import routes from '../../assets/routes/routes';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          {routes.map(route =>
            route.private ? (
              <PrivateRoute key={route.label} {...route} />
            ) : (
              <PublicRoute key={route.label} {...route} />
              ),
          )}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </>
  );
};

export default App;