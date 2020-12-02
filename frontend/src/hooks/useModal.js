import { useState } from 'react';

const useModal = () => {
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const [isUpdateError, setIsUpdateError] = useState(false);

  const openCongModalHook = () => {
    setIsUpdateSuccess(true);
  };
  const openErrModalHook = () => {
    setIsUpdateError(true);
  };
  const closeModalError = () => {
    closeErrModalHook();
  };

  const closeCongratulationModal = () => {
    closeCongModalHook();
  };

  const closeCongModalHook = () => {
    setIsUpdateSuccess(false);
  };

  const closeErrModalHook = () => {
    setIsUpdateError(false);
  };

  return {
    modalStatus: { isUpdateSuccess, isUpdateError },
    openModal: { openCongModalHook, openErrModalHook },
    closeModal: { closeModalError, closeCongratulationModal },
  };
};

export default useModal;
