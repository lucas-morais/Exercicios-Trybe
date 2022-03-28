import { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { IUser } from "../interfaces";

class UserModel  {
  constructor(private connection: Pool) {}

  async create(user: Omit<IUser, 'id'>): Promise<IUser> {
    const { nome, email, password } = user;
    const [{ insertId}] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users(name, email, password) VALUES(?, ?, ?)',
      [nome, email, password]
    );

    return { id: insertId, ...user};
  }

  async getAll(): Promise<IUser[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM users'
    );
    return result as IUser[];
  }

  async getById(id:number): Promise<IUser> {
    const [ result ] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM users WHERE id=?',
      [id]
    );
    return result[0] as IUser; 
  }

  async update(id:number, user: Omit<IUser, "id">): Promise<void> {
    const { nome, email, password } = user;
    await this.connection.execute(` 
      UPDATE user
      SET nome=?, email=?, password=?
      WHERE id=?
    `, [nome, email, password, id])
  }
  
  async delete(id: number): Promise<void> {
    await this.connection.execute(
      'DELETE FROM users WHERE id=?',
      [id]
    );
  }
}

export default UserModel;