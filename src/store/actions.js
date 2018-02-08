import _ from 'lodash'

export default {
  increment (context) {
    context.commit('increment')
  },
  registerUser ({commit, state}, payload) {
    commit('registerUser', payload)
  },
  loginUser ({commit, state},payload){
    let user = _.filter(state.users,(user) => {
        return payload.email === user.email && payload.password === user.password
    })
    return user
  }
}
