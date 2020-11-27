import categoriesConstants from '../constants/categoriesConstants';

const initialState = {
  categories: [],
};

const categories = (state = initialState.categories, { type, payload }) => {
  switch (type) {
    case categoriesConstants.CATEGORIES_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default categories;
