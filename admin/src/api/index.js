import request from "./request"


// getArticleList
export const reqArticleList = () => {
  return request({ url: "/articles/list", method: 'get'})
}


// getArticle
export const reqArticle = (articleId) => {
  return request({ url: "/articles/id ", data: articleId, method: 'post'})
}


// create article
export const reqCreateArticle = (data) => {
  return request({ url: "/articles", data, method: "post"})
}


// put article
export const reqPutArticle = (data) => {
  return request({url: "/articles", data, method: "put"})
}


// delete article
export const reqDeleteArticle = (data) => {
  return request({url: "/articles", data, method: "delete"})
}


// login 
export const reqUserLogin = (data) => {
  return request({url: "/user/login", data, method: "post"})
}