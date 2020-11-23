import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/page/all/All'
import Normal from '@/components/page/normal/Normal'
import Hide from '@/components/page/hide/Hide'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/all'
    },
    {
      path:'/all',
      component:All,
    },
    {
      path:'/normal',
      component:Normal
    },
    {
      path:'/hide',
      component:Hide
    }
  ]
})