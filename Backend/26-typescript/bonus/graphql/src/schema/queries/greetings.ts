import { GraphQLString } from "graphql";

const greetings = {
  type: GraphQLString,
  resolve: () => { 
    return 'Hello, World!'
  }, 
}

export default greetings;