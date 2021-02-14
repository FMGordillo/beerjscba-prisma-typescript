import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnimeCreateInput } from "../../../inputs/AnimeCreateInput";
import { AnimeUpdateInput } from "../../../inputs/AnimeUpdateInput";
import { AnimeWhereUniqueInput } from "../../../inputs/AnimeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAnimeArgs {
  @TypeGraphQL.Field(_type => AnimeWhereUniqueInput, {
    nullable: false
  })
  where!: AnimeWhereUniqueInput;

  @TypeGraphQL.Field(_type => AnimeCreateInput, {
    nullable: false
  })
  create!: AnimeCreateInput;

  @TypeGraphQL.Field(_type => AnimeUpdateInput, {
    nullable: false
  })
  update!: AnimeUpdateInput;
}
