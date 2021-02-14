import { ApolloServer } from "apollo-server-express";
import express, { Request, Response } from "express";
import "reflect-metadata";
import * as tq from "type-graphql";
import { context } from "./context";
import { resolvers } from "./generated/typegraphql-prisma";

const PORT = process.env.PORT ?? 3000;

const initServer = async () => {
  const app = express();

  app.get("/", (_req: Request, res: Response) => {
    res.send(
      `Server running with Express! Oh sorry, you want the GraphQL Playgroud? Try http://localhost:${PORT}/graphql`
    );
  });

  const schema = await tq.buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context,
  });

  server.applyMiddleware({ app });

  app.listen(PORT, () =>
    console.log(
      `Prisma + Apollo + Express + GraphQL Server listening on http://localhost:${PORT}`
    )
  );
};

initServer();
