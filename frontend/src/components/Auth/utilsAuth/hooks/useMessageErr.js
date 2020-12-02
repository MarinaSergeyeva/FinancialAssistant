import { useEffect, useState } from 'react';
import useReduxState from '../../../hooks/useReduxState';
import funcErrTranslator from '../utilsAuth/funcErrTranslator';

const useMessageErr = () => {
  const { error } = useReduxState();
  const [messageErr, setMessageErr] = useState('');

  const MessageErr = error => {
    const message = funcErrTranslator(Number(error?.status));
    setMessageErr(message);
  };

  useEffect(() => {
    MessageErr(error);
  }, [error]);

  return { messageErr, setMessageErr, error };
};

export default useMessageErr;
