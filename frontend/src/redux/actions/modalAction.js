import modalConstans from '../../redux/constants/modalConstans';

const openModalCongratulation = () => ({
  type: modalConstans.OPEN_CONGRATULATION,
});

const closeModalCongratulation = () => ({
  type: modalConstans.CLOSE_CONGRATULATION,
});

const openModalError = () => ({
  type: modalConstans.OPEN_ERROR_MODAL,
});

const closeModalError = () => ({
  type: modalConstans.OPEN_ERROR_MODAL,
});

export default {
  openModalCongratulation,
  closeModalCongratulation,
  openModalError,
  closeModalError,
};
