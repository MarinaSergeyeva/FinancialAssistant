import { useEffect, useState } from 'react';
import useReduxState from '../../../../hooks/useReduxState';

const useUserInfoAuth = (loginModal) => {
  const { userInfo } = useReduxState();
   const [userInfoRegistr, setUserInfoRegistr] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setUserInfoRegistr(true);
    } else {
      setUserInfoRegistr(false);
    }


    if (loginModal) {
      setSuccessModal(false);
    }

    if (userInfoRegistr) {
      setSuccessModal(true);
    } else {
      setSuccessModal(false);
    }
  }, [userInfo]);
 

  return [boolStatus, statusHandleChange];
};

export default useUserInfoAuth;