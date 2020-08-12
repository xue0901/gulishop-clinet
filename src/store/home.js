import {
  reqCategoryList
} from "@/api"

const state = {
  categoryList: []
}
const mutations = {
  //直接修改state数据 (不允许出现 if for 异步操作)
  RECEIVECATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  }
}
const actions = {
  //间接修改数据
  async getCategoryList({
    commit
  }) {
    const result = await reqCategoryList()
    if (result.code === 200) {
      commit('RECEIVECATEGORYLIST', result.data)
    }

  }


}
const getters = {

}

export default ({
  state,
  mutations,
  actions,
  getters
})