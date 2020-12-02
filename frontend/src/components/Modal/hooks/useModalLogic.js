import { useCallback, useEffect, useRef } from 'react';

const useModalLogic = closeModalFn => {
  const refModal = useRef();

  const handleClick = useCallback(
    ({ target }) => {
      if (refModal.current !== target) return;
      closeModalFn();
    },
    [closeModalFn],
  );

  const closeModalKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModalFn();
      }
    },
    [closeModalFn],
  );

  useEffect(() => {
    window.addEventListener('keydown', closeModalKeydown);
    document.body.style.overflow = 'hidden';

    return function cleanup() {
      window.removeEventListener('keydown', closeModalKeydown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModalKeydown]);

  return { refModal, handleClick };
};

export default useModalLogic;
