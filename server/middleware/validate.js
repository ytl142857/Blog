import { validationResult } from "express-validator";

export const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(502).json({
      code: 502,
      message: errors
        .array()
        .map((error) => error.msg)
        .join("; "),
    });
  };
};
