import { useEffect, useState } from 'react';

const useModalBackDropLogic = props => {
  const [isModalOpen, setModalOpen] = useState(false);
  // state = {
  //     isOpen: false,
  // };
  const closeModal = () => {
    props.close();
  };

  const closeModalKeydown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModalOverlay = e => {
    if (e.target.dataset.type === 'modal') {
      closeModal();
    }
  };

  useEffect(() => {
    // const handleModalChange = () => {
    setModalOpen(true);
    window.addEventListener('keydown', closeModalKeydown);
    document.addEventListener('click', closeModalOverlay);
    document.body.style.overflow = 'hidden';
    // };
    return () => {
      window.removeEventListener('keydown', closeModalKeydown);
      document.removeEventListener('click', closeModalOverlay);
      document.body.style.overflow = 'auto';
    };
  });
  // componentDidMount() {
  //     this.setState({ isOpen: true });
  //     window.addEventListener('keydown', this.closeModalKeydown);
  //     document.addEventListener('click', this.closeModalOverlay);
  //     document.body.style.overflow = 'hidden';
  // }

  // componentWillUnmount() {
  //     window.removeEventListener('keydown', this.closeModalKeydown);
  //     document.removeEventListener('click', this.closeModalOverlay);
  //     document.body.style.overflow = 'auto';
  // }

  return { isModalOpen, closeModal };
};

export default useModalBackDropLogic;
