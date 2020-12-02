import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
// import modalTransition from './modalTransition.module.css';
import styled from 'styled-components';
import useModalLogic from '../Modal/hooks/useModalLogic';

// const modalBackDrop = WrappedComponent => {
//   // console.log('props', this.props);

//   return class ModalBackDrop extends Component {
//     // const ModalBackDrop = WrappedComponent => {
//     state = {
//       isOpen: false,
//     };

//     componentDidMount() {
//       this.setState({ isOpen: true });
//       window.addEventListener('keydown', this.closeModalKeydown);
//       document.addEventListener('click', this.closeModalOverlay);
//       document.body.style.overflow = 'hidden';
//     }

//     componentWillUnmount() {
//       window.removeEventListener('keydown', this.closeModalKeydown);
//       document.removeEventListener('click', this.closeModalOverlay);
//       document.body.style.overflow = 'auto';
//     }

//     closeModal = () => {
//       this.props.close();
//     };

//     closeModalKeydown = e => {
//       if (e.code === 'Escape') {
//         this.closeModal();
//       }
//     };

//     closeModalOverlay = e => {
//       if (e.target.dataset.type === 'modal') {
//         this.closeModal();
//       }
//     };

//     render() {
//       console.log('props', this.props);
//       return (
//         <ModalOverlay data-type="modal">
//           <CSSTransition
//             in={this.state.isOpen}
//             timeout={250}
//             classNames={modalTransition}
//             unmountOnExit
//           >
//             <WrappedComponent {...this.props} closeModal={this.closeModal} />
//           </CSSTransition>
//         </ModalOverlay>
//       );
//     }
//   };
// };
// export default modalBackDrop;

const ModalBackDrop = WrappedComponent => {
  console.log('this.props', this.props);
  const { isModalOpen, closeModal } = useModalBackDropLogic();
  return (
    <ModalOverlay data-type="modal">
      <CSSTransition
        in={isModalOpen}
        timeout={250}
        classNames={modalTransition}
        unmountOnExit
      >
        <WrappedComponent {...this.props} closeModal={closeModal} />
      </CSSTransition>
    </ModalOverlay>
  );
};

export default ModalBackDrop;

// import React, { useState, useEffect } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import modalTransition from './modalTransition.module.css';
// import styled from 'styled-components';

// const ModalBackDrop = WrappedComponent => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     setIsOpen(true);
//     window.addEventListener('keydown', closeModalKeydown);
//     document.addEventListener('click', closeModalOverlay);
//     document.body.style.overflow = 'hidden';

//     return function cleanup() {
//       window.removeEventListener('keydown', closeModalKeydown);
//       document.removeEventListener('click', closeModalOverlay);
//       document.body.style.overflow = 'auto';
//     };
//   });

//   const closeModal = () => {
//     // close();
//   };

//   const closeModalKeydown = e => {
//     if (e.code === 'Escape') {
//       closeModal();
//     }
//   };

//    const closeModalOverlay = e => {
//     if (e.target.dataset.type === 'modal') {
//       closeModal();
//     }
//   };

//   return (
//     <ModalOverlay data-type="modal">
//       <CSSTransition
//         in={isOpen}
//         timeout={250}
//         classNames={modalTransition}
//         unmountOnExit
//       >
//         <WrappedComponent closeModalOverlay={closeModalOverlay} closeModalKeydown={closeModalKeydown} closeModal={closeModal} />
//       </CSSTransition>
//     </ModalOverlay>
//   );
// };
// export default ModalBackDrop;

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
