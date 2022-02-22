import express from "express"


import { login as loginCon, register as registerCon } from "../controller/user.js"
import { login as loginVal, register as registerVal } from "../validator/user.js"


const router = express.Router()


router.post("/login", loginVal, loginCon)


router.post("/register",registerVal, registerCon)


export { router }