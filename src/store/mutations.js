export default {
  increment (state) {
    state.count = state.count + 10
  },
  registerUser (state, payload) {
    state.users.push(payload)
  },
  loggedIn (state, payload) {
    state.isLoggedIn = payload
  },
  userDetails (state, user) {
    state.userDetails = user
  }
}
