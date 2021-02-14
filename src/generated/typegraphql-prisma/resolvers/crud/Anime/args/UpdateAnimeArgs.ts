import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnimeUpdateInput } from "../../../inputs/AnimeUpdateInput";
import { AnimeWhereUniqueInput } from "../../../inputs/AnimeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAnimeArgs {
  @TypeGraphQL.Field(_type => AnimeUpdateInput, {
    nullable: false
  })
  data!: AnimeUpdateInput;

  @TypeGraphQL.Field(_type => AnimeWhereUniqueInput, {
    nullable: false
  })
  where!: AnimeWhereUniqueInput;
}
