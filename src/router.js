import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'http://34.84.154.202:8080/',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
