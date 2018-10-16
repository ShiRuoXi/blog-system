import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import personalInfo from '@/page/personalInfo'
import picture from '@/page/picture'
import miscellaneousNotes from '@/page/miscellaneousNotes'
import explainList from '@/page/explainList'

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
    ,
    {
      path:'/notes',
      name:'miscellaneousNotes',
      component:miscellaneousNotes
    }
    ,
    {
      path:'/list',
      name:'explainList',
      component:explainList
    }
  ]
})
