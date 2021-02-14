import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateWithoutFavoriteAnimesInput } from "../inputs/UserCreateWithoutFavoriteAnimesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateOrConnectWithoutfavoriteAnimesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFavoriteAnimesInput, {
    nullable: false
  })
  create!: UserCreateWithoutFavoriteAnimesInput;
}
