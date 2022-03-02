import request from "./request"


// getArticleList
export const reqArticleList = () => {
  return request({ url: "/articles/list", method: 'get'})
}


// getArticle
export const reqArticle = (articleId) => {
  return request({ url: "/articles/id ", data: articleId, method: 'post'})
}
