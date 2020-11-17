const isAuthenticated = state => 'access_token';
// const isAuthenticated = state => null;
// const isAuthenticated = state => {
//   console.log(state.auth.token, "state.auth.token")
//   return state.auth.token
// };

export default { isAuthenticated };
