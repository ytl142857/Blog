import Vue from 'vue'
import VueRouter from 'vue-router'

import ArticleList from '../views/ArticleList.vue'
import ModifyArticle from '../views/ModifyArticle.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path:'/article/:id',
    name:'ArticleDetail',
    component: ModifyArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
