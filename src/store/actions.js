import _ from 'lodash'

export default {
  increment (context) {
    context.commit('increment')
  },
  setMenuForDinner ({commit, state}, payload) {
    commit('setMenuForDinner', payload)
  },
  setMenuForLunch ({commit, state}, payload) {
    commit('setMenuForLunch', payload)
  },
  registerUser ({commit, state}, payload) {
    let user = _.filter(state.users, (user) => {
      return payload.email === user.email
    })
    if (user.length) {
      return false
    } else {
      commit('registerUser', payload)
      return true
    }
  },
  loginUser ({commit, state}, payload) {
    let user = _.filter(state.users, (user) => {
      return payload.email === user.email && payload.password === user.password
    })
    if (user.length) {
      commit('loggedIn', true)
      commit('userDetails', user)
      return true
    }
    return false
  },
  logoutUser ({commit, state}) {
    commit('loggedIn', false)
    commit('userDetails', null)
    return true
  },
  addItem ({commit, state}, item) {
    let index = _.findIndex(state.cart, (cartItem) => {
      return cartItem.name === item.name
    })
    if (index > -1) {
      item.quantity = Number(item.quantity) + 1
      commit('updateItem', {item: item, index: index})
    } else {
      item.quantity = 1
      commit('addItem', item)
    }
    let total = 0
    _.each(state.cart, (cartItem) => {
      total += Number(cartItem.quantity) * Number(cartItem.Pfull)
    })
    commit('updateCartTotal', total)
    return true
  },
  placeOrder ({commit, state}) {
    let order = {}
    order.id = _.random(20000, 10000000)
    order.createdAt = new Date()
    order.items = state.cart
    order.user = state.userDetails ? state.userDetails[0] : null
    commit('placeOrder', order)
  }
}
