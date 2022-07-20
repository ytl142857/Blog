import { sign } from "../../utils/jwt.js";
import { User } from "../../model/index.js";
import config from "../../config/config.default.js";

export const register = async (req, res, next) => {
  try {
    let user = new User(req.body);
    await user.save();
    user = user.toJSON();
    res.status(200).json({
      data: user.username,
      code: 200,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    next({
      code: 502,
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const user = req.body;
    // 生成 token
    const token = await sign(
      {
        userId: user._id,
      },
      config.jwtSecret,
      {
        expiresIn: 60 * 60 * 24,
      }
    );
    // 生成返回的用户信息
    const retUser = {
      userId: user._id,
      userName: user.username,
    };
    res.status(200).json({
      data: {
        ...retUser,
        token,
      },
      code: 200,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    next({
      code: 502,
    });
  }
};

export const getUserList = async (req, res, next) => {
  try {
    const userList = await User.find();
    const userListCnt = await User.count();
    res.status(200).json({
      data: {
        items: userList.map((user) => {
          return {
            username: user.username,
          };
        }),
        total: userListCnt,
      },
      message: "success",
      code: 200,
    });
  } catch (error) {
    next({
      code: 502,
    });
  }
};
