import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Apply from '@/components/Apply'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/apply',
      component: Apply
    },
    {
      path: '/my',
      component: My
    }
  ]
})
