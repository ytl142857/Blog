import express from "express"


import { router as user } from "./user.js"


const router = express.Router()


router.use("/user", user)


router.use("/router", (req, res) => {
  res.status(200).json({
    msg: "router"
  })
})


export { router }