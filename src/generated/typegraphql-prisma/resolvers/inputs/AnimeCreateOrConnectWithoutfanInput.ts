import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AnimeCreateWithoutFanInput } from "../inputs/AnimeCreateWithoutFanInput";
import { AnimeWhereUniqueInput } from "../inputs/AnimeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnimeCreateOrConnectWithoutfanInput {
  @TypeGraphQL.Field(_type => AnimeWhereUniqueInput, {
    nullable: false
  })
  where!: AnimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnimeCreateWithoutFanInput, {
    nullable: false
  })
  create!: AnimeCreateWithoutFanInput;
}
