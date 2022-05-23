import { connect } from 'mongoose';

export default class Connection {
  constructor(private connectionString = 'mongodb://localhost:/world_cups') {}

  public getConnection() {
    return connect(this.connectionString);
  }
}
