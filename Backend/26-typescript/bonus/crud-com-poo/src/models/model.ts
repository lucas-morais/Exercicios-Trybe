import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import CRUD, { Entity } from "../interfaces/crud"
import DBContext from "./connection";

export default class Model<T extends Entity> implements CRUD<T> {
  protected INSERT_QUERY = '';
  protected GET_ALL_QUERY = '';
  protected GET_BY_ID_QUERY = '';
  protected DELETE_QUERY = '';
  protected UPDATE_QUERY = '';

  constructor(protected context: DBContext){}

  getById(id: number): Promise<T> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<T[]> {
    let [result] = await this.context.getConnection().execute<RowDataPacket[]>(
      this.GET_ALL_QUERY
    );
    return result as T[];
  }
  async create(obj: T): Promise<T> {
    const [result] = await this.context.getConnection()
      .execute<ResultSetHeader>(
        'INSERT INTO user(username, password) VALUE(?, ?)',
        [...Object.values(obj)]
      );

    obj.id = result.insertId;

    return obj;
  }
  update(obj: T): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  


}