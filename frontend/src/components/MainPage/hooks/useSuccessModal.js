import { useEffect, useState } from 'react';
import useReduxState from '../../../hooks/useReduxState';

const useSuccessModal = (userInfoRegistr) => {
  const { userID } = useReduxState();
  const [successModal, setSuccessModal] = useState(false);
  console.log(userInfoRegistr, 'userInfoRegistr-seSuccessModal1');
  useEffect(() => {
    console.log(userInfoRegistr, 'userInfoRegistr-seSuccessModal2');
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
