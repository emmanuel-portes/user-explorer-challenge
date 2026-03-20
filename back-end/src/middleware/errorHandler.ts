import { Request, Response, NextFunction } from 'express';

import { AppError, UnprocessableEntity } from '../error/appError';

import config from '../config/config'

export const errorHandler = ( err: AppError, req: Request, res: Response, next: NextFunction ) => {
  if (config.NODE_ENV == "dev") {
    console.error(err);
  }

  if (err instanceof UnprocessableEntity) {
    return res.status(err.statusCode).json({success: false, message: err.message, data: err.data})
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({success: false, message: err.message})
  }

  res.status(500).json({success: false, message: 'Internal Server Error',});
};

export const methodNotAllowed = (req: Request, res: Response) => {
  res.status(405).json({success: false, message: `Method ${req.method} not available on route: ${req.path}`})
}