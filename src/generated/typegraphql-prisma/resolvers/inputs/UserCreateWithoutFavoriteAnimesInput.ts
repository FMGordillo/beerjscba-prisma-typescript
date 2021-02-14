import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Idolization } from "../../enums/Idolization";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutFavoriteAnimesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Idolization, {
    nullable: true
  })
  fanType?: "CASUAL" | "ENTHUSIAST" | "LOVER" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
