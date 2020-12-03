import React, { Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../assets/routes/routes';
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
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const [showNavigation, showNavigationHandler] = useHandleBoolChange(false);
  const { isUserAuth, userInfo } = useReduxState();
  const { isDesktopDevice } = useDeviceSizes();

  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isUserAuth, userInfo.totalSalary]);

  return (
    <>
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
    </>
  );
};

export default App;
