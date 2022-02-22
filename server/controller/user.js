import { sign } from "../utils/jwt.js"
import { User } from "../model/index.js"
import config from "../config/config.default.js"


export const register = async(req, res, next) => {
  try {
    let user = new User(req.body.user)
    await user.save()
    user = user.toJSON()
    delete user.password
    res.status(201).json({
      user
    })
  } catch (error) {
    next(error)
  }
}


export const login = async(req, res, next) => {
  try {
    const user = req.user.toJSON()
    // 生成 token
    const token = await sign({
      userId: user._id
    }, config.jwtSecret, {
      expiresIn: 60*60
    })
    // 生成返回的用户信息
    const retUser = {
      userId: user._id,
      userName: user.username
    }
    res.status(200).json({
      ...retUser,
      token
    })
  } catch (error) {
    next(error)
  }
}