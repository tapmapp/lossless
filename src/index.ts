import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { resolvers } from './graphql/resolvers/lossless.Resolver';

dotenv.config();

async function startApolloServer() {

  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      balance(address: String): Float
    },
    type Mutation {
      validate(message: String, address: String, signature: String): Boolean
    }
  `;

  // Provide resolver functions for your schema fields
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await app.listen(process.env.PORT, () => {
    console.log(`app running at port ${process.env.PORT} `)
  });
  return { server, app };
}

startApolloServer();