import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import useReduxState from '../../hooks/useReduxState';
import { authSelector, userSelectors } from '../../redux/selectors';

const withAuth = WrappedComponent => {
  function WithAuth(props) {
    // const { isUserAuth, userInfo } = useReduxState();
    const isUserAuth = useSelector(authSelector.isAuthenticated);
    const userInfo = useSelector(userSelectors.getCurrentUser);
    const { flatPrice } = userInfo;
    const [userData, setUserData] = useState(0);
    useEffect(() => {
      setUserData(flatPrice);
    }, [flatPrice]);
    console.log('Rerender in withAuth', userData);
    return (
      <WrappedComponent
        userData={userInfo}
        isAuthenticated={isUserAuth}
        {...props}
      />
    );
  }

  // const mapStateToProps = state => ({
  //   isAuthenticated: authSelector.isAuthenticated(state),
  // });

  return withRouter(WithAuth); // connect(mapStateToProps)(
};

export default withAuth;
