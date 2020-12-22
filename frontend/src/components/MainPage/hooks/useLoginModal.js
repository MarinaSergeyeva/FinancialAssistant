import { useEffect, useState } from 'react';
import useReduxState from '../../../hooks/useReduxState';

const useLoginModal = setSuccessModal => {
  const { userID } = useReduxState();
  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    if (loginModal) {
      setSuccessModal(false);
    }
  }, [userID, loginModal, setSuccessModal]);

  return [loginModal, setLoginModal];
};

export default useLoginModal;
