import express from "express";
import { auth } from "../../middleware/auth.js";

import {
  createCon,
  updateCon,
  deleteCon,
  getArticleById,
  getArticleList,
} from "./controller.js";
import { articleIdVal } from "./validator.js";

const router = express.Router();

router.post("/id", getArticleById);
router.get("/list", getArticleList);
router.post("/", auth, createCon);
router.post("/delete", auth, articleIdVal, deleteCon);
router.put("/", auth, articleIdVal, updateCon);

export { router };
