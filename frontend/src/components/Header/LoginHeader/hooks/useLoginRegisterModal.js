import { useEffect, useState } from 'react';

const useLoginRegisterModal = () => {
  const [isShowRegistration, setIsShowRegistration] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);

  const showModalAuth = e => {
    e.target.dataset.auth === 'registration'
      ? setIsShowRegistration(true)
      : setIsShowLogin(true);
  };

  const closeRegistration = () => {
    setIsShowRegistration(prev => !prev);
  };

  const closeLogin = () => {
    setIsShowLogin(prev => !prev);
  };

  return {
    status: { isShowRegistration, isShowLogin },
    setStatus: { showModalAuth, closeRegistration, closeLogin },
  };
};

export default useLoginRegisterModal;
