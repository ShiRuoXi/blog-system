import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import personalInfo from '@/page/personalInfo'
import picture from '@/page/picture'
import miscellaneousNotes from '@/page/miscellaneousNotes'
import explainList from '@/page/explainList'
import desultory from '@/page/desultory'
import special from '@/page/special'
import test from '@/page/test'

//特效页面
import button from '@/special/button'
import vueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(vueAwesomeSwiper);
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
    ,
    {
      path:'/desultory',
      name:'desultory',
      component:desultory
    }
    ,
    {
      path:'/special',
      name:'special',
      component:special
    }
    ,
    {
      path:'/test',
      name:'test',
      component:test
    },
    {
      path:'/but',
      name:'button',
      component:button
    }
  ]
})
