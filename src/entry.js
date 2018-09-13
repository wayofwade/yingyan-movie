/* global Vue */

/* weex initialized here, please do not move this line */
// const rootLoader = require('weex-loader')
const router = require('./router')
const App = require('@/components/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
// Vue.use(rootLoader)

// router.push('/')
