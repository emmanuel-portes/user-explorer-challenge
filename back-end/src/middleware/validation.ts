import { validationResult } from "express-validator";

export const validate = (req: any, res: any, next: any) => {
  const errors: any = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors: any = {};

    errors.array().forEach((error: any) => {
      if (!formattedErrors[error.path]) {
        formattedErrors[error.path] = [];
      }

      formattedErrors[error.path].push(error.msg);

    });

    return res.status(400).json({ 
      success: false,
      message: formattedErrors
    });
  }

  next();
};