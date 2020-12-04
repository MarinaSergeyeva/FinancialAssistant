import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import action from '../../../redux/actions/errorActions';

const useModalLogic = closeModalFn => {
  const refModal = useRef();
  const dispatch = useDispatch();

  const handleClick = useCallback(
    ({ target }) => {
      if (refModal.current !== target) return;
      closeModalFn();
      dispatch(action.setError({ statusText: '', status: '', kindOfErr: '' }));
    },
    [closeModalFn, dispatch],
  );

  const closeModalKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModalFn();
        dispatch(action.setError({ statusText: '', status: '', kindOfErr: '' }));
      }
    },
    [closeModalFn, dispatch],
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
