import express from "express";
import { auth } from "../../middleware/auth.js";

import {
  login as loginCon,
  register as registerCon,
  getUserList,
} from "./controller.js";
import { login as loginVal, register as registerVal } from "./validator.js";

const router = express.Router();

router.post("/login", loginVal, loginCon);
router.post("/register", auth, registerVal, registerCon);
router.get("/list", auth, getUserList);

export { router };
