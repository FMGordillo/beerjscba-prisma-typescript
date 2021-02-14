import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AnimeListRelationFilter } from "../inputs/AnimeListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumIdolizationFilter } from "../inputs/EnumIdolizationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumIdolizationFilter, {
    nullable: true
  })
  fanType?: EnumIdolizationFilter | undefined;

  @TypeGraphQL.Field(_type => AnimeListRelationFilter, {
    nullable: true
  })
  favoriteAnimes?: AnimeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
