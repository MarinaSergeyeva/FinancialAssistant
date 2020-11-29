import modalConstants from '../../redux/constants/modalConstants';

const openModalCongratulation = () => ({
  type: modalConstants.OPEN_CONGRATULATION,
});

const closeModalCongratulation = () => ({
  type: modalConstants.CLOSE_CONGRATULATION,
});

const openModalError = () => ({
  type: modalConstants.OPEN_ERROR_MODAL,
});

const closeModalError = () => ({
  type: modalConstants.OPEN_ERROR_MODAL,
});

export default {
  openModalCongratulation,
  closeModalCongratulation,
  openModalError,
  closeModalError,
};
