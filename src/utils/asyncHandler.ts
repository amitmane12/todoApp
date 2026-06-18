import { NextFunction, Request, Response } from 'express';

const asyncHandler =
  (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fn(req, res, next);
    } catch (error: ErrorType | any) {
      res.status(error.status || 500).json({
        success: false,
        message: error.message || 'Internal Server Error',
      });
      next(error);
    }
  };

type ErrorType = { status?: number; message?: string; success?: boolean };

export default asyncHandler;
