import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserServices";
import { IUser } from "../interfaces/user";

export default class UserController {

  constructor(private userService: UserService) {

  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
     const users: IUser[] = await this.userService.list();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
  
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const newUser: IUser = req.body;
      const created = await this.userService.create(newUser);
      res.status(201).json(created);
    } catch (error) {
      next(error);
    }
  }
}