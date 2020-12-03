import { useEffect, useState } from 'react';
import useReduxState from '../../../hooks/useReduxState';

const useUserInfoAuth = bool => {
  const { userID } = useReduxState();
  const [userInfoRegistr, setUserInfoRegistr] = useState(bool);

  useEffect(() => {
    if (userID) {
      setUserInfoRegistr(true);
    } else {
      setUserInfoRegistr(false);
    }
  }, [userID]);

  return [userInfoRegistr, setUserInfoRegistr];
};

export default useUserInfoAuth;
