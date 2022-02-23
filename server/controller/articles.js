import { Article } from "../model/index.js"


export const getArticleById = async(req, res, next) => {
  try {
    const articleId = req.body.articleId
    const article = await Article.findById(articleId)
    res.status(200).json({
      article
    })
  } catch (error) {
    next(error)
  }
}


export const getArticleList = async(req, res, next) => {
  try {
    const articleList = await Article.find()
    const articleListCnt = await Article.count()
    res.status(200).json({
      ...articleList,
      articleListCnt
    })
  } catch (error) {
    next(error)
  }
}


export const createCon = async (req, res, next) => {
  try {
    let article = new Article(req.body.article)
    await article.save()
    article = article.toJSON()
    res.status(201).json({
      article
    })
  } catch (error) {
    next(error)
  }
}


export const updateCon = async (req, res, next) => {
  try {
    await Article.findByIdAndUpdate(req.body.articleId, req.body.article)
    res.status(200).end()
  } catch (error) {
    next(error)
  }
}


export const deleteCon = async (req, res, next) => {
  try {
    const articleId = req.body.articleId
    await Article.deleteOne({ _id: articleId })
    res.status(200).end()
  } catch (error) {
    next(error)
  }
}