/**
 * Created by chencc on 2018/9/16.
 * 引入vuex手机端调试有问题
 */
import thirdDiv from '@/components/testComponent/jumpDiv.vue'
import testVuex from '@/components/testComponent/testVuex.vue'
const tesst = [
  {
    path: '/thirdDiv',
    name: '第三个',
    component: thirdDiv
  },
  {
    path: '/testVuex',
    name: '测试vuex',
    component: testVuex
  },
  {
    path: '/secondDiv',
    component: () => import('@/components/testComponent/studyPage.vue'),
    title: '第二个'
  }
]
/*const test = [
  {
    path: '/thirdDiv',
    component: () => import('@/components/testComponent/jumpDiv.vue'),
    title: '第三个'
  },
  {
    path: '/testVuex',
    component: () => import('@/components/testComponent/testVuex.vue'),
    title: 'testVuex'
  },
  {
    path: '/fourthDiv',
    component: () => import('@/components/testComponent/pictureCircle.vue'),
    title: '第四个'
  },
  {
    path: '/secondDiv',
    component: () => import('@/components/testComponent/studyPage.vue'),
    title: '第二个'
  },
  {
    path: '/helloWorld',
    component: () => import('@/components/testComponent/TextAndDiv.vue'),
    title: 'hello'
  },
  {
    path: '/testIndex',
    component: () => import('@/components/testComponent/testTags.vue'),
    title: 'testIndex'
  }
]*/
module.exports = { tesst }
/* export default [
  {
    path: '/thirdDiv',
    component: () => import('@/components/testComponent/jumpDiv.vue'),
    title: '第三个'
  },
  {
    path: '/testVuex',
    component: () => import('@/components/testComponent/testVuex.vue'),
    title: 'testVuex'
  },
  {
    path: '/fourthDiv',
    component: () => import('@/components/testComponent/pictureCircle.vue'),
    title: '第四个'
  },
  {
    path: '/secondDiv',
    component: () => import('@/components/testComponent/studyPage.vue'),
    title: '第二个'
  },
  {
    path: '/helloWorld',
    component: () => import('@/components/testComponent/TextAndDiv.vue'),
    title: 'hello'
  },
  {
    path: '/testIndex',
    component: () => import('@/components/testComponent/testTags.vue'),
    title: 'testIndex'
  }
] */
