import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnimeWhereInput {
  @TypeGraphQL.Field(_type => [AnimeWhereInput], {
    nullable: true
  })
  AND?: AnimeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeWhereInput], {
    nullable: true
  })
  OR?: AnimeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeWhereInput], {
    nullable: true
  })
  NOT?: AnimeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  studio?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  releaseDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  endDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  fan?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  fanId?: StringNullableFilter | undefined;
}
