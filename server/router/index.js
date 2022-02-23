import express from "express"


import { router as user } from "./user.js"
import { router as article } from "./article.js"


const router = express.Router()


router.use("/user", user)
router.use("/articles", article)


router.use("/router", (req, res) => {
  res.status(200).json({
    msg: "router"
  })
})


export { router }