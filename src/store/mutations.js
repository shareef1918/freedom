export default {
  increment (state) {
    state.count = state.count + 10
  },
  registerUser (state, payload) {
    state.users.push(payload)
  }
}
