import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Index from '@/page/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/index',
      component: Index
    }
  ]
})

