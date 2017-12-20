import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/page/HomeIndex'
import HomeLeft from '@/page/HomeLeft'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    },
    {
      path: '/HomeLeft',
      name: 'HomeLeft',
      component: HomeLeft
    }
  ]
})
