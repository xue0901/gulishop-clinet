import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import users from './users'
Vue.use(Vuex)

const state = {

}
const mutations = {

}
const actions = {

}
const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    users
  }
})