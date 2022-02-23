import { verify } from "../utils/jwt.js"
import config from "../config/config.default.js"
import { User } from "../model/index.js"


export const auth = async (req, res, next) => {
  let token = req.headers['authorization']
  token = token ? token.split("Bearer ")[1] : null

  if(!token) {
    return res.status(401).end()
  }

  try {
    const decodedToken = await verify(token, config.jwtSecret)
    req.user = await User.findById(decodedToken.userId)

    next()
  } catch (error) {
    return res.status(401).end()
  }
}