import { GraphQLList } from "graphql";
import { userResolver } from "../resolvers";
import { LoginTypeDef } from "../typeDefs";

const login = {
  type: new GraphQLList(LoginTypeDef),
  resolve: userResolver.login, 
}

export default login;