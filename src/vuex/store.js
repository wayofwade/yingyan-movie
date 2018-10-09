import Vue from 'vue'
import Vuex from 'vuex'
import example from './model/example.js'
import testVuex from './model/testVuex.js'

Vue.use(Vuex)

const state = {
  compareAllList: [], // 所有的
  delList: [], // 被删除的
  addList: [] // 新增加的
}

const mutations = {
  setCompareAllList (state, str) {
    state.compareAllList = str.li
  },
  addDelList (state, str) { // 添加删除的
    state.delList.push(str)
  },
  addAddList (state, str) { // 添加添加的
    state.addList.push(str)
  },
  zeroDelList (state, str) { // 添加删除的
    state.delList = []
  },
  zeroAddList (state, str) { // 添加添加的
    state.addList = []
  }
}

const actions = { // 先actions然后==mutations
  setCompareAllList (context, params) {
    context.commit('setCompareAllList', params)
  },
  addDelList (context, params) {
    context.commit('addDelList', params)
  },
  addAddList (context, params) {
    context.commit('addAddList', params)
  },
  zeroDelList (context, params) {
    context.commit('zeroDelList', params)
  },
  zeroAddList (context, params) {
    context.commit('zeroAddList', params)
  }

}

const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {
    example, testVuex
  }
})

export default store
