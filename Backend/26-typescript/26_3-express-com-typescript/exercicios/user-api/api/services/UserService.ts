import { connection, UserModel } from "../models";
import { IUser } from '../interfaces/index';


class UserService {
  private model: UserModel;
  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: Omit<IUser, "id">): Promise<IUser> {
    const userCreated = await this.model.create(user);
    
    return userCreated;
  }

  async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  }

  async getById(id:number): Promise<IUser> {
    const user = await this.model.getById(id);
    return user; 
  }

  async update(id:number, user: Omit<IUser, "id">): Promise<void> {
    await this.model.update(id, user);
  }
  
  async delete(id: number): Promise<void> {
    await this.model.delete(id);
  }
}

export default UserService;