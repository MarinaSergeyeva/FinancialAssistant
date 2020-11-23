import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import routes from '../../assets/routes/routes';
import PrivateRoute from '../CustomRoutes/PrivateRoute';
import PublicRoute from '../CustomRoutes/PublicRoute';
import NotFound from '../../pages/NotFound/NotFound';
import userOperations from '../../redux/operations/userOperations';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation';
import device from '../../common/deviceSizes';
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const [showNavigation, setShowMobileNavigation] = useState('false');
  console.log('showNavigation', showNavigation);
  const showNavigationHandler = () => {
    setShowMobileNavigation(!showNavigation);
  };

  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const isTabletDevice = useMediaQuery({
    query: device.tablet,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, []);
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <button onClick={showNavigationHandler}>Navigation</button>
        {!showNavigation && (isMobileDevice || isTabletDevice) && (
          <Navigation />
        )}
        {showNavigation && (
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
