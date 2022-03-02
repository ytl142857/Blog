import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import Article from '@/views/Article/Index.vue'
import ArticleDetail from '@/views/Article/ArticleDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
  {
    path: '/article/:articleId',
    name: 'ArticleDetail',
    component: ArticleDetail
  }
]

let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

const router = new VueRouter({
  routes
})

export default router
