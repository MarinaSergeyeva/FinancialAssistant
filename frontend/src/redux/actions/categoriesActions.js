import constants from '../constants/categoriesConstants';

const categoriesRequest = () => ({
  type: constants.CATEGORIES_REQUEST,
});

const categoriesSuccess = categories => {
  return {
    type: constants.CATEGORIES_SUCCESS,
    payload: categories,
  };
};

const categoriesError = error => ({
  type: constants.CATEGORIES_ERROR,
  payload: error,
});

export default {
  categoriesRequest,
  categoriesSuccess,
  categoriesError,
};
