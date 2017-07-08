import Vue from 'vue'
import Router from 'vue-router'
import Discover from '@/components/Discover'
import Footer from '@/components/Footer'
import SignIn from '@/components/SignIn'
import pageIndex from '@/pages/pageIndex'
import pageDiscover from '@/pages/pageDiscover'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'pageIndex',
      component: pageIndex
    },
    {
      path: '/pageDiscover',
      name: 'pageDiscover',
      component: pageDiscover
    },
    {
      path:'/Footer',
      name:'Footer',
      component:Footer
    },
    // {
    //   path: '/',
    //   name: 'Carousel',
    //   component: Carousel
    // },
    // {
    //   path: '/pageIndex',
    //   name: 'pageIndex',
    //   component: pageIndex
    // },
    {
      path: '/Discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
