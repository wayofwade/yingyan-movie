/* global Vue */

/* weex initialized here, please do not move this line */
// const rootLoader = require('weex-loader')
import store from '@/vuex/store' // 组件用import
const router = require('./router') // 根目录下的用require
const App = require('@/components/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router, store }, App))
// Vue.use(rootLoader)

// router.push('/')
