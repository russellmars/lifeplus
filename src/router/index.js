import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import tag from '@/views/tag'
import life from '@/views/life'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }, {
      path: '/tags/:tag',
      component: tag
    }, {
      path: '/tags/:tag/:life',
      component: life
    }
  ]
})
