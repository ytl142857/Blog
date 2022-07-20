import express from "express";
import morgan from "morgan";
import cors from "cors";

import { router } from "./router/index.js";

import "./model/index.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// 外部中间件
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", router);

app.get("/api/hello", (req, res) => {
  res.status(200).json({ code: 200, data: "hello", message: "success" });
});

app.get("/api/error", (req, res, next) => {
  next({ code: 401, message: "error" });
});

// 错误处理中间件
app.use(errorHandler());

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
