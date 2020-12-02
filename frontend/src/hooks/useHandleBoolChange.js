import { useState } from 'react';

const useHandleBoolChange = bool => {
  const [boolStatus, setBoolStatus] = useState(bool);

  const statusHandleChange = () => {
    setBoolStatus(!boolStatus);
  };

  return [boolStatus, statusHandleChange];
};

export default useHandleBoolChange;
