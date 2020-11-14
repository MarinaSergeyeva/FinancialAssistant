import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// export const persistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['access_token'],
// };

const root = combineReducers({
  auth: {},
});

export default root;
