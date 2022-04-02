import { DataSource } from 'typeorm';
import 'dotenv/config';
import { User } from '../entities';

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB
} = process.env;


const AppDataSource = new DataSource({
  type: 'mysql',
  host: MYSQL_HOST,
  port: Number(MYSQL_PORT) || 3306,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
  synchronize: true,
  entities: [ User ]
});

AppDataSource.initialize()
  .then(() => {
    console.log('Banco de dados conectado com sucesso')
  })
  .catch((err) => {
    console.log('Alguma coisa deu errado.', err);
  })