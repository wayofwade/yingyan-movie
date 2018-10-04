/* global Vue */
/* 1-此路由是针对component/index.vue的
* 2-import加入路由移动端显示不了，[...c, ...a]这种形式只支持一个元素的list
*  */
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import movieList from '@/components/movieList/movieList'
import movieDetail from '@/components/movieList/movieDetail'
import movieCircle from '@/components/movieCircle/movieCircle'
import myMovies from '@/components/myMovies/myMovies'
import test from '@/routers/test.js'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail
    }
  ].concat(test)
})
