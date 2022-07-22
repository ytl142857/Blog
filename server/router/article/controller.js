import { Article } from "../../model/index.js";
import { sha256 } from "../../utils/crypto.js";

export const getArticleById = async (req, res, next) => {
  try {
    const articleId = req.body.articleId;
    const article = await Article.findById(articleId);
    res.status(200).json({
      article,
    });
  } catch (error) {
    next({
      code: 502,
    });
  }
};

export const getArticleList = async (req, res, next) => {
  try {
    const articleList = await Article.find()
      .select("-_id -__v")
      .sort("-createTime");
    const articleListCnt = await Article.count();
    res.status(200).json({
      data: {
        items: articleList,
        total: articleListCnt,
      },
      code: 200,
      message: "success",
    });
  } catch (error) {
    next({
      code: 502,
    });
  }
};

export const createCon = async (req, res, next) => {
  try {
    let article = new Article({
      ...req.body,
      id: sha256(Date().toString() + req.body.title).slice(0, 12),
    });
    await article.save();
    article = article.toJSON();
    res.status(200).json({
      code: 200,
      message: "success",
    });
  } catch (error) {
    next({
      code: 502,
    });
  }
};

export const updateCon = async (req, res, next) => {
  try {
    await Article.findOneAndUpdate({ id: req.body.id }, req.body);
    res.status(200).json({
      code: 200,
      message: "success",
    });
  } catch (error) {
    next({
      code: 502,
    });
  }
};

export const deleteCon = async (req, res, next) => {
  try {
    const id = req.body.id;
    await Article.deleteOne({ id });
    res.status(200).json({
      code: 200,
      message: "success",
    });
  } catch (error) {
    next({
      code: 502,
    });
  }
};
