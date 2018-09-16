/**
 * Created by chencc on 2018/9/16.
 */
export default [
  {
    path: '/thirdDiv',
    component: () => import('@/components/testComponent/thirdDiv.vue'),
    title: '第三个'
  }
  /* {
    path: '/fourthDiv',
    component: () => import('@/components/testComponent/fourthDiv.vue'),
    title: '第四个'
  },
  {
    path: '/secondDiv',
    component: () => import('@/components/testComponent/secondDiv.vue'),
    title: '第二个'
  },
  {
    path: '/helloWorld',
    component: () => import('@/components/testComponent/HelloWorld.vue'),
    title: 'hello'
  },
  {
    path: '/testIndex',
    component: () => import('@/components/testComponent/testIndex.vue'),
    title: 'testIndex'
  } */
]
