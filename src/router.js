/* global Vue */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/index'

Vue.use(Router)

module.exports = new Router({
  routes: [
    /* {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }
  ]
})
