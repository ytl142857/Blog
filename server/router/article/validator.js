import { validate } from "../../middleware/validate.js";
import { body } from "express-validator";
import { Article } from "../../model/index.js";

export const articleIdVal = validate([
  body("id").custom(async (articleId) => {
    const article = await Article.findOne({ id: articleId });
    if (!article) {
      return Promise.reject("文章不存在！");
    }
  }),
]);
