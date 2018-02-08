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
  },
  addItem (state, item) {
    state.cart.push(item)
  },
  updateItem (state, data ){
    state.cart[data.index] = data.item
  },
  updateCartTotal (state, total){
    state.grandTotal = total
  },
  placeOrder ( state, order) {
    state.orders.push(order);
    state.cart = [];
    state.grandTotal = 0
  }
}
