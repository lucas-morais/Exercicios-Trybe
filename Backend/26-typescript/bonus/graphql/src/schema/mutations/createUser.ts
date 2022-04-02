import { GraphQLString } from 'graphql';
import { userResolver } from '../resolvers';
import { UserTypeDef } from '../typeDefs';

const createUser = {
  type: UserTypeDef,

  args: {
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: userResolver.createUser,
};

export default createUser;
