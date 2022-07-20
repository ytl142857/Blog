import express from "express";

import { router as user } from "./user/index.js";
// import { router as article } from "./article.js";

const router = express.Router();

router.use("/user", user);
// router.use("/articles", article);

export { router };
