import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import personalInfo from '@/page/personalInfo'
import picture from '@/page/picture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/info',
      name:'personalInfo',
      component:personalInfo
    },
    {
      path:'/picture',
      name:'picture',
      component:picture
    }
  ]
})
