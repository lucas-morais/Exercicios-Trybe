import { ResultSetHeader ,RowDataPacket } from "mysql2/promise";
import { IUser } from "../interfaces/user";
import DBContext from "./connection";

export default class UserModel {
  constructor(private context: DBContext ) {

  }

  async getAll(): Promise<IUser[]> {
    let [result] = await this.context.getConnection().execute<RowDataPacket[]>(
      'SELECT * FROM user'
    );
    return result as IUser[];
  }

  async create(user: IUser): Promise<IUser> {
    const [result] = await this.context.getConnection()
      .execute<ResultSetHeader>(
        'INSERT INTO user(username, password) VALUE(?, ?)',
        [user.username, user.password]
      );

    user.id = result.insertId;

    return user;
  }
}