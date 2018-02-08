import Vue from 'vue'
import Router from 'vue-router'
import UserDashboard from '@/components/User/Dashboard'
import AdminDashboard from '@/components/Admin/Dashboard'
import AdminHome from '@/components/Admin/Home'
import AdminMenu from '@/components/Admin/Menu'
import Users from '@/components/Admin/Users'
import Offers from '@/components/Admin/Offers'
import Analytics from '@/components/Admin/Analytics'

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
      redirect: {
        name: 'admin-home'
      },
      component: AdminDashboard,
      children: [{
        path: 'home',
        name: 'admin-home',
        component: AdminHome
      }, {
        path: 'menu',
        name: 'admin-menu',
        component: AdminMenu
      }, {
        path: 'users',
        name: 'users',
        component: Users
      }, 
      {
        path: 'offers',
        name: 'offers',
        component: Offers
      },{
        path: 'analytics',
        name: 'analytics',
        component: Analytics
      }]
    }
  ]
})
