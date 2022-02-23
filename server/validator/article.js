import { validate } from "../middleware/validate.js"
import { body } from "express-validator"
import { Article } from "../model/index.js"


export const articleIdVal = validate([
  body("articleId").custom(async articleId => {
    const article = await Article.findById(articleId)
    if(!article) {
      return Promise.reject("没有这篇文章")
    }
  })
])