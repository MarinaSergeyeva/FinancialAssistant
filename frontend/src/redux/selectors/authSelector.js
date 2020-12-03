const isAuthenticated = state => {
  return state.auth.token;
};

export default { isAuthenticated };
