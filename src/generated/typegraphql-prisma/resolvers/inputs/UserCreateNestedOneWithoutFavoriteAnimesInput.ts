import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutfavoriteAnimesInput } from "../inputs/UserCreateOrConnectWithoutfavoriteAnimesInput";
import { UserCreateWithoutFavoriteAnimesInput } from "../inputs/UserCreateWithoutFavoriteAnimesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutFavoriteAnimesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFavoriteAnimesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFavoriteAnimesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutfavoriteAnimesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutfavoriteAnimesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
