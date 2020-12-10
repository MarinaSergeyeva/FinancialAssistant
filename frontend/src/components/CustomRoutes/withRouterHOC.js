import React from 'react';
import { withRouter } from 'react-router';
import useReduxState from '../../hooks/useReduxState';

const withAuth = WrappedComponent => {
  function WithAuth(props) {
    const { isUserAuth } = useReduxState();
    return <WrappedComponent isAuthenticated={isUserAuth} {...props} />;
  }
  return withRouter(WithAuth);
};

export default withAuth;
