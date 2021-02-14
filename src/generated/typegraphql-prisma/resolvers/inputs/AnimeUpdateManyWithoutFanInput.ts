import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AnimeCreateOrConnectWithoutfanInput } from "../inputs/AnimeCreateOrConnectWithoutfanInput";
import { AnimeCreateWithoutFanInput } from "../inputs/AnimeCreateWithoutFanInput";
import { AnimeScalarWhereInput } from "../inputs/AnimeScalarWhereInput";
import { AnimeUpdateManyWithWhereWithoutFanInput } from "../inputs/AnimeUpdateManyWithWhereWithoutFanInput";
import { AnimeUpdateWithWhereUniqueWithoutFanInput } from "../inputs/AnimeUpdateWithWhereUniqueWithoutFanInput";
import { AnimeUpsertWithWhereUniqueWithoutFanInput } from "../inputs/AnimeUpsertWithWhereUniqueWithoutFanInput";
import { AnimeWhereUniqueInput } from "../inputs/AnimeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnimeUpdateManyWithoutFanInput {
  @TypeGraphQL.Field(_type => [AnimeCreateWithoutFanInput], {
    nullable: true
  })
  create?: AnimeCreateWithoutFanInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeCreateOrConnectWithoutfanInput], {
    nullable: true
  })
  connectOrCreate?: AnimeCreateOrConnectWithoutfanInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeUpsertWithWhereUniqueWithoutFanInput], {
    nullable: true
  })
  upsert?: AnimeUpsertWithWhereUniqueWithoutFanInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeWhereUniqueInput], {
    nullable: true
  })
  connect?: AnimeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeWhereUniqueInput], {
    nullable: true
  })
  set?: AnimeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AnimeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeWhereUniqueInput], {
    nullable: true
  })
  delete?: AnimeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeUpdateWithWhereUniqueWithoutFanInput], {
    nullable: true
  })
  update?: AnimeUpdateWithWhereUniqueWithoutFanInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeUpdateManyWithWhereWithoutFanInput], {
    nullable: true
  })
  updateMany?: AnimeUpdateManyWithWhereWithoutFanInput[] | undefined;

  @TypeGraphQL.Field(_type => [AnimeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AnimeScalarWhereInput[] | undefined;
}
