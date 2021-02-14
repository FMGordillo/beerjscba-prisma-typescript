import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserCreateOrConnectWithoutfavoriteAnimesInput } from "../inputs/UserCreateOrConnectWithoutfavoriteAnimesInput";
import { UserCreateWithoutFavoriteAnimesInput } from "../inputs/UserCreateWithoutFavoriteAnimesInput";
import { UserUpdateWithoutFavoriteAnimesInput } from "../inputs/UserUpdateWithoutFavoriteAnimesInput";
import { UserUpsertWithoutFavoriteAnimesInput } from "../inputs/UserUpsertWithoutFavoriteAnimesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutFavoriteAnimesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFavoriteAnimesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFavoriteAnimesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutfavoriteAnimesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutfavoriteAnimesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFavoriteAnimesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFavoriteAnimesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFavoriteAnimesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFavoriteAnimesInput | undefined;
}
