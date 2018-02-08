import state from './state'

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
  },
  setMenuForLunch (state, menu) {
    state.menuForToday.lunch = menu
  },
  setMenuForDinner (state, menu) {
    state.menuForToday.dinner = menu
  }
}
