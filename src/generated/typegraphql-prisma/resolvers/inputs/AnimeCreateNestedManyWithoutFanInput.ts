import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AnimeCreateOrConnectWithoutfanInput } from "../inputs/AnimeCreateOrConnectWithoutfanInput";
import { AnimeCreateWithoutFanInput } from "../inputs/AnimeCreateWithoutFanInput";
import { AnimeWhereUniqueInput } from "../inputs/AnimeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnimeCreateNestedManyWithoutFanInput {
  @TypeGraphQL.Field(_type => [AnimeCreateWithoutFanInput], {
    nullable: true
  })
  create?: AnimeCreateWithoutFanInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeCreateOrConnectWithoutfanInput], {
    nullable: true
  })
  connectOrCreate?: AnimeCreateOrConnectWithoutfanInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeWhereUniqueInput], {
    nullable: true
  })
  connect?: AnimeWhereUniqueInput[] | undefined;
}
