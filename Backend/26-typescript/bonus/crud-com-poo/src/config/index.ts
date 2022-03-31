import 'dotenv/config'

export interface ConfigMap {
  api: {
    port: number,
  };
  db: {
    host: string,
    user: string,
    password: string,
    database: string,
  }
}

export default class Config implements ConfigMap {
  api: { port: number; };
  db: { host: string; user: string; password: string; database: string; };
  constructor() {
    this.api = { port: Number(process.env.PORT) || 3000}
    this.db = {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || ''
    }
  }
}