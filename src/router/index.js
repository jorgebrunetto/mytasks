import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '@/components/Tasks'
import Report from '@/components/Report'
import Login from '@/components/Login'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/Report',
      name: 'Report',
      component: Report
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
