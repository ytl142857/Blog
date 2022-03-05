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
    meta: {
      title: "主页"
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    meta: {
      title: "文章列表"
    }
  },
  {
    path: '/article/:articleId',
    name: 'ArticleDetail',
    component: ArticleDetail,
    meta: {
      title: "详情"
    }
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


router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = `Chestnutttt | ${to.meta.title}`
  }
  next()
})


export default router
