export const errorHandler = () => {
  return (err, req, res, next) => {
    res.status(200).json({
      code: err.code,
      message: err?.message || "请求发生错误",
    });
  };
};
