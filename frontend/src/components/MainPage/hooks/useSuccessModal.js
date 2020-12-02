import { useEffect, useState } from 'react';
import useReduxState from '../../../hooks/useReduxState';

const useSuccessModal = (userInfoRegistr) => {
  const { userID } = useReduxState();
  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    if (userInfoRegistr) {
      console.log(userInfoRegistr, 'userInfoRegistr-seSuccessModal3');
      setSuccessModal(true);
    } else {
      setSuccessModal(false);
    }
  }, [userID]);


  return [successModal, setSuccessModal];
};

export default useSuccessModal;
