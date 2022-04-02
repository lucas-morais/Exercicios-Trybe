import express, { Express } from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app: Express = express();

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}))


export default app;