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
import testVuex from '@/components/testComponent/testVuex.vue'
import studyPage from '@/components/testComponent/studyPage.vue'
import testImage from '@/components/testComponent/testImage.vue'
import TextAndDiv from '@/components/testComponent/TextAndDiv.vue'
import ZIndex from '@/components/testComponent/ZIndex.vue'
import pictureCircle from '@/components/testComponent/pictureCircle.vue'
import jumpDiv from '@/components/testComponent/jumpDiv.vue'
import testTags from '@/components/testComponent/testTags.vue'
import father from '@/components/testComponent/father.vue'
// import('@/components/testComponent/studyPage.vue')

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
    },
    {
      path: '/testTags',
      name: '测试菜单栏',
      component: testTags
    },
    {
      path: '/testVuex',
      name: '测试vuex',
      component: testVuex
    },
    {
      path: '/studyPage',
      component: studyPage,
      title: '学习demo'
    },
    {
      path: '/testImage',
      component: testImage,
      title: '测试image'
    },
    {
      path: '/TextAndDiv',
      component: TextAndDiv,
      title: '测试div'
    },
    {
      path: '/ZIndex',
      component: ZIndex,
      title: '测试ZIndex'
    },
    {
      path: '/pictureCircle',
      component: pictureCircle,
      title: '轮播图'
    },
    {
      path: '/jumpDiv',
      component: jumpDiv,
      title: '跳转'
    },
    {
      path: '/father',
      component: father,
      title: '父组件'
    }
    /* {
      path: '/testImage',
      component: () => import('@/components/testComponent/testImage.vue'),
      title: '测试image'
    } */
  ]
})
