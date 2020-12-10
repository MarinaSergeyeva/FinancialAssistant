import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../assets/routes/routes';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';
import NotFound from '../../pages/NotFound/NotFound';
import userOperations from '../../redux/operations/userOperations';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import Spinner from '../Spinner/Spinner';
import useReduxState from '../../hooks/useReduxState';
import useHandleBoolChange from '../../hooks/useHandleBoolChange';
import useDeviceSizes from '../../hooks/useDeviceSizes';
import useDispatchOperation from '../../hooks/useDispatchOperation';

const App = () => {
  const [showNavigation, showNavigationHandler] = useHandleBoolChange(false);
  const { isUserAuth } = useReduxState();
  const { isDesktopDevice } = useDeviceSizes();
  useDispatchOperation(isUserAuth, userOperations.getCurrentUser);

  return (
    <Suspense fallback={<Spinner />}>
      <Header
        showNavigation={showNavigationHandler}
        isNavigationOn={showNavigation}
      />
      {isUserAuth && showNavigation && !isDesktopDevice && (
        <Navigation
          showNavigation={showNavigationHandler}
          isNavigationOn={showNavigation}
        />
      )}
      {!showNavigation && (
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
      )}
    </Suspense>
  );
};

export default App;
