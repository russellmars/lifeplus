import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import content from '@/views/content'
import about from '@/views/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }, {
      path: '/content',
      component: content
    }, {
      path: '/about',
      component: about
    }
  ]
})
