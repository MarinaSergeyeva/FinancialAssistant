import React from 'react';
import { ModalOverlay } from './modalStyled';
import useModalLogic from './hooks/useModalLogic';

export default function Modal({ children, closeModal }) {
  const { refModal, handleClick } = useModalLogic(closeModal);

  return (
    <ModalOverlay ref={refModal} onClick={handleClick}>
      {children}
    </ModalOverlay>
  );
}
