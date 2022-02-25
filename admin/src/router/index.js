import Vue from 'vue'
import VueRouter from 'vue-router'

import ArticleList from '@/views/Article/ArticleList'
import ArticleDetail from '@/views/Article/ArticleDetail'
import ArticleCreate from '@/views/Article/ArticleCreate'
import Login from '@/views/User/Login'
import Register from '@/views/User/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/article/:articleId',
    name: 'Article',
    component: ArticleDetail
  },
  {
    path: '/createarticle',
    name: 'ArticleCreate',
    component: ArticleCreate
  },  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]


let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location, resolve, reject) {
    if(resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, ()=>{}, ()=>{})
    }
}


const router = new VueRouter({
  routes
})

export default router
