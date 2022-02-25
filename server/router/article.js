import express from "express"
import { auth } from "../middleware/auth.js"


import { createCon, updateCon, deleteCon, getArticleById, getArticleList } from "../controller/articles.js"
import { articleIdVal } from "../validator/article.js"


const router = express.Router()

router.post("/id", getArticleById)
// router.post("/id", articleIdVal, getArticleById)
router.get("/list", getArticleList)


// 创建文章
router.post("/", auth, createCon)

// 删除文章，id
router.delete("/", auth, articleIdVal, deleteCon)

// id 更改文章
router.put("/", auth, articleIdVal, updateCon)


export { router }