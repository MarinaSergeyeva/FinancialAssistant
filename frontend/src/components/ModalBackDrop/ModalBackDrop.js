import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import modalTransition from './modalTransition.module.css';
import styled from 'styled-components';

const modalBackDrop = WrappedComponent => {
  return class ModalBackDrop extends Component {
    state = {
      isOpen: false,
    };
    componentDidMount() {
      this.setState({ isOpen: true });
      window.addEventListener('keydown', this.closeModalKeydown);
      document.addEventListener('click', this.closeModalOverlay);
      document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.closeModalKeydown);
      document.removeEventListener('click', this.closeModalOverlay);
      document.body.style.overflow = 'auto';
    }

    closeModal = () => {
      this.props.close();
    };

    closeModalKeydown = e => {
      if (e.code === 'Escape') {
        this.closeModal();
      }
    };

    closeModalOverlay = e => {
      if (e.target.dataset.type === 'modal') {
        this.closeModal();
      }
    };

    render() {
      return (
        <ModalOverlay data-type="modal">
          <CSSTransition
            in={this.state.isOpen}
            timeout={250}
            classNames={modalTransition}
            unmountOnExit
          >
            <WrappedComponent {...this.props} closeModal={this.closeModal} />
          </CSSTransition>
        </ModalOverlay>
      );
    }
  };
};
export default modalBackDrop;

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
