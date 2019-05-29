import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Swiper from '@/components/common/Swiper'
import Select from '@/components/common/Select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/toSelect',
      name: 'Select',
      component: Select
    }
  ]
})
