// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import * as filters from '@/filters'
import Vodal from 'vodal'

Vue.config.productionTip = false

Vue.component(Vodal.name, Vodal)

// 注册过滤器
Object.keys(filters).forEach(name => {
  Vue.filter(name, filters[name])
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
