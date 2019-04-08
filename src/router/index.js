import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Skills from '@/components/Skills'
import Works from '@/components/Works'

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
