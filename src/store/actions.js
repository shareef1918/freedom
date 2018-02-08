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
    return true
  }
}
