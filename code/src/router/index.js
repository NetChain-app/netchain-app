import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Apply from '@/components/Apply'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
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
    }
  ]
})
