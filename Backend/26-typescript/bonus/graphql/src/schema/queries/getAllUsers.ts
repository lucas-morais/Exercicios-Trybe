import { GraphQLList } from "graphql";
import { userResolver } from "../resolvers";
import { UserTypeDef } from "../typeDefs";

const getAllUsers = {
  type: new GraphQLList(UserTypeDef),
  resolve: userResolver.getAllUsers, 
}

export default getAllUsers;