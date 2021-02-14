import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import * as tq from "type-graphql";
import { context } from "./context";
import { resolvers } from "./generated/typegraphql-prisma";

const PORT = process.env.PORT ?? 3000;

const initServer = async () => {
  /**
   * Acá es donde debería mostrarles esto:
   * @see https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql/src/schema.ts
   * ... pero me parece que no.
   *
   * En su lugar, les muestro la mejor solución que encontré para mi caso
   * type-graphql && typegraphql-prisma
   *
   * NOTAS IMPORTANTES:
   *
   * - No olvides `npx prisma generate`, o no va a encontrar los 'resolvers'
   * - Fijate que agregamos dos lineas en tsconfig.json,
   *   eso es porque `typegraphql-prisma` usa '@Decoradores'
   *   y otras "cositas" de Typescript que ignoro
   *   @see https://github.com/MichalLytek/typegraphql-prisma/issues/58
   * - Se instalaron nuevas dependencias porque type-graphql lo necesita
   *   @see https://github.com/MichalLytek/typegraphql-prisma/blob/main/Readme.md
   */
  const schema = await tq.buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context,
  });

  server
    .listen(PORT)
    .then(() =>
      console.log(
        `Prisma + Apollo + GraphQL Server listening on http://localhost:${PORT}`
      )
    )
    .catch((error) => console.log(`Error while initializing Apollo server`));
};

initServer();
