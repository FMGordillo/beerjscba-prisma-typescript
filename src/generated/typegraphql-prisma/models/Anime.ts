import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Anime {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  studio?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  releaseDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate?: Date | null;

  fan?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fanId?: string | null;
}
