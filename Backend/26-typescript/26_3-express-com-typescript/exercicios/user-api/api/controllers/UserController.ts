import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IUser } from "../interfaces";
import { UserService } from "../services";

class UserController {
  
  private service: UserService;
  constructor() {
    this.service = new UserService();
  }

  async create(req: Request, res: Response):Promise<Response>  {
    const { nome, email, password}: Omit<IUser, "id"> = req.body;
    const createdUser = await this.service.create({nome, email, password});
    return res.status(StatusCodes.CREATED).json(createdUser)

  }

  async getAll(_req: Request, res: Response):Promise<Response>  {
    const users = await this.service.getAll();
    return res.status(StatusCodes.OK).json(users);
  }

  async getById(req: Request, res: Response):Promise<Response>  {
    const { id } = req.params;
    const user = await this.service.getById(+id);

    return res.status(StatusCodes.OK).json(user);
  }

  async update(req: Request, res: Response):Promise<Response>  {
    const { id } = req.params;
    const { nome, email, password}: Omit<IUser, "id"> = req.body;
    await this.service.update(+id, { nome, email, password});

    return res.status(StatusCodes.NO_CONTENT).end();
  }
  
  async delete(req: Request, res: Response):Promise<Response>  {
    const { id } = req.params;
    await this.service.delete(+id);

    return res.status(StatusCodes.NO_CONTENT).end();
  }
}

export default UserController;