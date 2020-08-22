import { reqAddOrUpdateCart, reqShopCartList, reqUpdateIsCheck } from '@/api'

const state = {
  shopCartList: [],
}
const mutations = {
  RECEIVESHOPCARTLIST(state, shopCartList) {
    state.shopCartList = shopCartList
  },
}
const actions = {
  //异步发请求
  async addOrUpdateCart({ commit }, { skuId, skuNum }) {
    const result = await reqAddOrUpdateCart(skuId, skuNum)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },

  async getShopCartList({ commit }) {
    const result = await reqShopCartList()
    if (result.code === 200) {
      commit('RECEIVESHOPCARTLIST', result.data)
    }
  },
  //修改购物车状态
  async updateIsCheck({ commit }, { skuId, isChecked }) {
    const result = await reqUpdateIsCheck(skuId, isChecked)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
      //返回的是失败的Promise 结果就是这个return返回的失败的promise的原因
    }
  },
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
}
