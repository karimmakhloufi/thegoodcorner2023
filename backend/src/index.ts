import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { AppDataSource } from "./dataSource";
import { buildSchema } from "type-graphql";
import { AdResolver } from "./resolvers/adResolver";

const start = async () => {
  await AppDataSource.initialize();
  const schemaFromTypegraphQL = await buildSchema({
    resolvers: [AdResolver],
  });
  const server = new ApolloServer({ schema: schemaFromTypegraphQL });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

start();
