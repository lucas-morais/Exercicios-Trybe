import { RowDataPacket } from "mysql2/promise";
import { IUser } from "../interfaces/user";
import DBContext from "./connection";

export default class UserModel {
  constructor(private context: DBContext ) {

  }

  async getAll(): Promise<IUser[]> {
    let [result] = await this.context.getConnection().execute<RowDataPacket[]>(
      'SELECT * FROM user'
    )

    return result as IUser[];
  }
}