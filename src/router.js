/* global Vue */
/* 1-此路由是针对component/index.vue的
* 2-import加入路由移动端显示不了，[...c, ...a]这种形式好像不支持
*  */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/index'
import movieList from '@/components/movieList/movieList'
import movieCircle from '@/components/movieCircle/movieCircle'
import myMovies from '@/components/myMovies/myMovies'
// import test from '@/routers/test.js'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/movieList',
      name: 'movieList',
      component: movieList
    },
    {
      path: '/movieCircle',
      name: 'movieCircle',
      component: movieCircle
    },
    {
      path: '/myMovies',
      name: 'myMovies',
      component: myMovies
    }
    // , ...test
  ]
})
