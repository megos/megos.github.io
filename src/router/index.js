import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'
import Skills from '@/pages/Skills'
import Works from '@/pages/Works'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
    },
    {
      path: '/works',
      name: 'Works',
      component: Works,
    },
  ],
})

export default router
