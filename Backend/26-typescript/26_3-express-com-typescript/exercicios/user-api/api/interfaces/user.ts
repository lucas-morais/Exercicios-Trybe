import { NextFunction, Request, Response } from "express";

interface IUser {
  id: number;
  nome: string;
  email: string;
  password: string;
}


type ControllerFunction = (req: Request, res: Response, next?: NextFunction ) => Promise<Response>
// interface IUserModel {
//   create(user: Omit<IUser, "id">): Promise<IUser>
//   getAll(): Promise<IUser[]>
  
// }

interface IUserController{
  create: ControllerFunction,
}

export { IUser, ControllerFunction, IUserController };