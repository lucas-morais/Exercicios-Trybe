import mysql, { Pool } from 'mysql2/promise';
import { ConfigMap } from '../config';


export default class DBContext {

  private connection: Pool;
  constructor(private config: ConfigMap) {
    this.connection = mysql.createPool(this.config.db)
  }

  getConnection(): Pool {
    return this.connection;
  }
}
