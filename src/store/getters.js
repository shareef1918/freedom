import state from "./state";

export default {
  carousels: state => {
    return state.carousels
  },
  menuForToday: state => state.menuForToday,
  recipes: state => {
    return state.recipes
  },
  features: state => {
    return state.features
  },
  count: state => {
    return state.count
  },
  isLoggedIn: state => {
    return state.isLoggedIn
  },
  users: state => {
    return state.users
  },
  isLoggedIn: state => {
    return state.isLoggedIn
  },
  userDetails: state => {
    return state.userDetails
  }
}
