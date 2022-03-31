import { NextFunction, Request, Response } from "express";

export default class UserController {

  constructor() {

  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      throw new Error('Error')
      res.status(501).end();
    } catch (error) {
      next(error);
    }
  }
}