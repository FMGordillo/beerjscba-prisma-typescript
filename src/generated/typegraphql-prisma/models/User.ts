import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Anime } from "../models/Anime";
import { Idolization } from "../enums/Idolization";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Idolization, {
    nullable: false
  })
  fanType!: "CASUAL" | "ENTHUSIAST" | "LOVER";

  favoriteAnimes?: Anime[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
