import constants from '../constants/spinnerConstants';

const loaderOn = () => ({
  type: constants.LOADER_ON,
});

const loaderOff = () => ({
  type: constants.LOADER_OFF,
});

export default {
  loaderOn,
  loaderOff,
};
