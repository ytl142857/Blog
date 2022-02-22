import { validate } from "../middleware/validate.js"
import { body } from "express-validator"
import { User } from "../model/index.js"


export const login = [
  // 检验字段是否都存在
  validate([
    body("user.username").notEmpty().withMessage("用户名不能为空"),
    body("user.password").notEmpty().withMessage("密码不能为空")
  ]),
  // 检验用户是否存在
  validate([
    body("user.username").custom(async (username, { req }) => {
      let user = await User.findOne({ username })
      if(!user) {
        return Promise.reject("用户不存在")
      }

      req.user = user
    })
  ]),
  // 检验密码是否正确
  validate([
    body("user.password").custom(async (password, { req }) => {
      if( password !== req.user.password ) {
        return Promise.reject("密码错误")
      }
    })
  ])
]


export const register = validate([
  body("user.username").custom(async username => {
    const user = await User.findOne({username})
    if( user ) {
      return Promise.reject("用户名已存在")
    }
  })
])