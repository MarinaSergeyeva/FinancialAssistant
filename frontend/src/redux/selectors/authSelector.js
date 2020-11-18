
const isAuthenticated = state => {
  console.log(state.auth.token, "state.auth.token")
  return state.auth.token
};

export default { isAuthenticated };
