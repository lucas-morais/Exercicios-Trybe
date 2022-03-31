import { IUser } from "../interfaces/user";
import UserModel from "../models/userModel";

export default class UserService {
  
  constructor(private userModel: UserModel) {

  }

  async list ():Promise<IUser[]> {
    const users = await this.userModel.getAll();
    return users;
  }

  async create(user: IUser): Promise<IUser> {
    const created = await this.userModel.create(user);
    return created;
  } 
}