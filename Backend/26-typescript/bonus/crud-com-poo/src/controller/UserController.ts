import { NextFunction, Request, Response } from "express";

export default class UserController {

  private name = 'USerController'
  constructor() {

  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(501).send(this.name)
  }
}