import { ResultSetHeader ,RowDataPacket } from "mysql2/promise";
import { IUser } from "../interfaces/user";
import DBContext from "./connection";
import Model from "./model";

export default class UserModel extends Model<IUser>{
  constructor(protected context: DBContext ) {
    super(context)

    this.GET_ALL_QUERY = 'SELECT * FROM user';
    this.INSERT_QUERY = 'INSERT INTO user(username, password) VALUE(?, ?)'
    this.UPDATE_QUERY = ''
  }
}