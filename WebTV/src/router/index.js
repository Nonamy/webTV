import Vue from 'vue'
import Router from 'vue-router'
import LeStar from '@/components/LeStar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LeStar',
      component: LeStar
    }
  ]
})
