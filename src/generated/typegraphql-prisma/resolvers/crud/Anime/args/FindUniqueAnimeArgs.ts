import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnimeWhereUniqueInput } from "../../../inputs/AnimeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAnimeArgs {
  @TypeGraphQL.Field(_type => AnimeWhereUniqueInput, {
    nullable: false
  })
  where!: AnimeWhereUniqueInput;
}
