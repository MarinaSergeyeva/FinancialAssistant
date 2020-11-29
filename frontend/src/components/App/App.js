import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import routes from '../../assets/routes/routes';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';
import NotFound from '../../pages/NotFound/NotFound';
import userOperations from '../../redux/operations/userOperations';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation';
import device from '../../common/deviceSizes';
import Spinner from '../Spinner/Spinner';
import { useMediaQuery } from 'react-responsive';
import { authSelector } from '../../redux/selectors';

const App = () => {
  const [showNavigation, setShowMobileNavigation] = useState(false);

  const isUserAuth = useSelector(state => authSelector.isAuthenticated(state));

  const isDesktopDevice = useMediaQuery({
    query: device.desktop,
  });

  const showNavigationHandler = () => {
    setShowMobileNavigation(!showNavigation);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, [isUserAuth]);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header showNavigation={showNavigationHandler} />
        {isUserAuth && showNavigation && !isDesktopDevice && (
          <Navigation showNavigation={showNavigationHandler} />
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
