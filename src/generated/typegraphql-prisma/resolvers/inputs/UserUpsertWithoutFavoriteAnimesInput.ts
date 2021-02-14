import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutFavoriteAnimesInput } from "../inputs/UserCreateWithoutFavoriteAnimesInput";
import { UserUpdateWithoutFavoriteAnimesInput } from "../inputs/UserUpdateWithoutFavoriteAnimesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutFavoriteAnimesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFavoriteAnimesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFavoriteAnimesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFavoriteAnimesInput, {
    nullable: false
  })
  create!: UserCreateWithoutFavoriteAnimesInput;
}
