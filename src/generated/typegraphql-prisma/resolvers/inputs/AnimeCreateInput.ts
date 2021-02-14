import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateNestedOneWithoutFavoriteAnimesInput } from "../inputs/UserCreateNestedOneWithoutFavoriteAnimesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnimeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  studio?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  releaseDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFavoriteAnimesInput, {
    nullable: true
  })
  fan?: UserCreateNestedOneWithoutFavoriteAnimesInput | undefined;
}
