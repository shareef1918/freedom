
export default {
  carousels: state => {
    return state.carousels
  },
  recipes: state => {
    return state.recipes
  },
  features: state => {
    return state.features
  },
  users: state => {
    return state.users
  },
  isLoggedIn: state => {
    return state.isLoggedIn
  },
  userDetails: state => {
    return state.userDetails
  },
  menuForToday: state => {
    return state.menuForToday
  },
  cartData: state => {
    return state.cart
  },
  grandTotal: state => {
    return state.grandTotal
  },
  orders: state => {
    return state.orders
  }
}
