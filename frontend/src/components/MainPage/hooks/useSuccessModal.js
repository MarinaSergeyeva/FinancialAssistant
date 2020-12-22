import { useEffect, useState } from 'react';
import useReduxState from '../../../hooks/useReduxState';

const useSuccessModal = userInfoRegistr => {
  const { userID } = useReduxState();
  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    if (userInfoRegistr) {
      setSuccessModal(true);
    } else {
      setSuccessModal(false);
    }
  }, [userID, userInfoRegistr]);

  return [successModal, setSuccessModal];
};

export default useSuccessModal;
