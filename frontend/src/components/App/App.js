import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
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

  const flatPrice = useSelector(state => state.user.info.flatPrice);
  const history = useHistory();

  const showNavigationHandler = () => {
    setShowMobileNavigation(!showNavigation);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, [isUserAuth]);

  useEffect(() => {
    flatPrice && history.push('/expense');
  }, [flatPrice]);

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
