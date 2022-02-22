import mongoose from "mongoose"


import { userSchema } from "./user.js"
import config from "../config/config.default.js"


// 连接 MongoDB
mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
// 连接失败
db.on("error", (err) => {
  console.log("MongoDB 连接失败", err)
})

// 连接成功
db.once("open", function () {
  console.log("MongoDB 连接成功")
})


export const User = mongoose.model("User", userSchema)