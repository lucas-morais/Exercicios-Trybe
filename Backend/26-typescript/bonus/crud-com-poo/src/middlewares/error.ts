import { Request, Response, NextFunction } from "express";

export default class ErrorMddleware {
  public static handleError(err: Error, req: Request, res:Response, next: NextFunction) {
    res.status(500).json({message: 'Sorry.'})
  }
}