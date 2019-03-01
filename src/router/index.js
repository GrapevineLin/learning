import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home'
import MemberPage from '@/components/Member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/member',
      name: 'Member',
      component: MemberPage
    }
  ]
})
