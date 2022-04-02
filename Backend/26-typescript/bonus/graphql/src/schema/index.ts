import { GraphQLObjectType, GraphQLSchema } from "graphql";
import * as mutations from './mutations'
import * as queries from "./queries";

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: queries,
});

const rootMutation = new GraphQLObjectType({
  name: 'rootMutation',
  fields: mutations,
})


export default new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
})