/**
 * Created by asus-z on 2018/11/12.
 */
//路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'

//声明使用vue
Vue.use(VueRouter)
//default  暴露一个(还是多个)
export default new VueRouter({
  
  //配置应用中的所有路由
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              path:'/home/message/detail/:id',
              component:MessageDetail
            },
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:'/',
      redirect:'/about'
    },
  ]
})
