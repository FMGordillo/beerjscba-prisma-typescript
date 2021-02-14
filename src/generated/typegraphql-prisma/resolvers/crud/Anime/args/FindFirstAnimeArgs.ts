import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnimeOrderByInput } from "../../../inputs/AnimeOrderByInput";
import { AnimeWhereInput } from "../../../inputs/AnimeWhereInput";
import { AnimeWhereUniqueInput } from "../../../inputs/AnimeWhereUniqueInput";
import { AnimeScalarFieldEnum } from "../../../../enums/AnimeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAnimeArgs {
  @TypeGraphQL.Field(_type => AnimeWhereInput, {
    nullable: true
  })
  where?: AnimeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AnimeOrderByInput], {
    nullable: true
  })
  orderBy?: AnimeOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => AnimeWhereUniqueInput, {
    nullable: true
  })
  cursor?: AnimeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AnimeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "studio" | "releaseDate" | "endDate" | "fanId"> | undefined;
}
