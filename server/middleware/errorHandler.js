export const errorHandler = () => {
  return (err, req, res, next) => {
    res.status(err.code).json({
      code: err.code,
      message: err?.message || "请求发生错误",
    });
  };
};
