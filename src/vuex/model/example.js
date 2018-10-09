/**
 * Created by chencc on 2018/8/1.
 * 使用的时候新建文件，在store.js引入。
 * 方法不要和另外的文件一样，vuex中会重复调用这些方法
 */
const example = {
  state: {
    hello: 'hello vuex'
  },

  mutations: {
    setHello (state, params) { // 添加添加的
      state.hello = params
    }
  },

  actions: { // 先actions然后==mutations
    setHello (context, params) {
      context.commit('setHello', params)
    }
  }
}

export default example
