import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import setError from '../../redux/actions/errorActions';

export default function Modal({ children, closeModal }) {
  const refModal = useRef();
  const dispatch = useDispatch();

  const hendleClick = useCallback(
    ({ target }) => {
      if (refModal.current !== target) return;
      closeModal();
      dispatch(setError.setError({ kindOfErr: '', status: 0, statusText: '' }));
    },
    [closeModal],
  );

  const closeModalKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
        dispatch(
          setError.setError({ kindOfErr: '', status: 0, statusText: '' }),
        );
      }
    },
    [closeModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', closeModalKeydown);
    document.body.style.overflow = 'hidden';

    return function cleanup() {
      window.removeEventListener('keydown', closeModalKeydown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModalKeydown]);

  return (
    <ModalOverlay ref={refModal} onClick={hendleClick}>
      {children}
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(128, 128, 128, 0.65);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
