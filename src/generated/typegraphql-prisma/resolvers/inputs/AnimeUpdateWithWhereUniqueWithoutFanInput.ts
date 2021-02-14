import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AnimeUpdateWithoutFanInput } from "../inputs/AnimeUpdateWithoutFanInput";
import { AnimeWhereUniqueInput } from "../inputs/AnimeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnimeUpdateWithWhereUniqueWithoutFanInput {
  @TypeGraphQL.Field(_type => AnimeWhereUniqueInput, {
    nullable: false
  })
  where!: AnimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnimeUpdateWithoutFanInput, {
    nullable: false
  })
  data!: AnimeUpdateWithoutFanInput;
}
