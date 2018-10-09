/**
 * Created by chencc on 2018/8/1.
 * 使用的时候新建文件，在store.js引入。
 * 方法不要和另外的文件一样，vuex中会重复调用这些方法
 */
const testVuex = {
  state: {
    hello: 'hello vuex',
    count: 80
  },

  mutations: {
    testVuex_setHello (state, params) { // 添加添加的
      state.hello = params
    },
    addVuex (state, params) { // 添加添加的
      state.count += params
    },
    minusVuex (state, params) { // 减少的的
      state.count -= params
    }
  },

  actions: { // 先actions然后==mutations
    testVuex_setHello (context, params) {
      context.commit('testVuex_setHello', params)
    },
    addVuex (context, params) {
      context.commit('addVuex', params)
    },
    minusVuex (context, params) {
      context.commit('minusVuex', params)
    }
  }
}

export default testVuex
