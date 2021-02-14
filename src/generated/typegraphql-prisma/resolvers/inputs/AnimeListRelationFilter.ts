import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AnimeWhereInput } from "../inputs/AnimeWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnimeListRelationFilter {
  @TypeGraphQL.Field(_type => AnimeWhereInput, {
    nullable: true
  })
  every?: AnimeWhereInput | undefined;

  @TypeGraphQL.Field(_type => AnimeWhereInput, {
    nullable: true
  })
  some?: AnimeWhereInput | undefined;

  @TypeGraphQL.Field(_type => AnimeWhereInput, {
    nullable: true
  })
  none?: AnimeWhereInput | undefined;
}
