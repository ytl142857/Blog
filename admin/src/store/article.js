import { reqArticleList, reqArticle, reqCreateArticle, reqPutArticle, reqDeleteArticle } from "@/api"
import moment from "moment"


const state = {
  articleList: [],
  articleListCnt: 0,
  article: {}
}

const mutations = {
  ARTICLELIST(state, res) {
    state.articleList = res.articleList
    state.articleListCnt = res.articleListCnt
  },
  ARTICLE(state, res) {
    state.article = res.article
  }
}

const actions = {
  async getArticleList({commit}) {
    try {
      const res = await reqArticleList()
      commit("ARTICLELIST", res)
    } catch (error) {
      return Promise.reject(new Error("get article list error"))
    }
    
  },
  async getArticle({commit}, articleId) {
    try {
      const res = await reqArticle(articleId)
      commit("ARTICLE", res)
    } catch(error) {
      return Promise.reject(new Error("get article error"))
    }
  },
  async createArticle({commit}, data) {
    try {
      const res = await reqCreateArticle(data)
    } catch (error) {
      return Promise.reject(new Error("create article error"))
    }
  },
  async putArticle({commit}, data) {
    try {
      const res = await reqPutArticle(data)
    } catch (error) {
      return Promise.reject(new Error("put article error"))
    }
  },
  async deleteArticle({commit}, data) {
    try {
      const res = await reqDeleteArticle(data)
    } catch (error) {
      return Promise.reject(new Error("delete article error"))
    }
  }
}

const getters = {
  formatArticleList: (state) => {
    return state.articleList.map((article) => {
      article.classfication = (article.classfication === "life") ? "生活" : "技术"
      article.createTime = moment(article.createTime).format("YYYY-MM-DD HH:mm:ss")
      
      return article
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}