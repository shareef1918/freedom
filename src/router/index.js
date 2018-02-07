import Vue from 'vue'
import Router from 'vue-router'
import UserDashboard from '@/components/User/Dashboard'
import AdminDashboard from '@/components/Admin/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'user-dashboard',
    component: UserDashboard
  },
  {
    path: '/admin',
    name: 'admin-dashboard',
    component: AdminDashboard
  }]
})
