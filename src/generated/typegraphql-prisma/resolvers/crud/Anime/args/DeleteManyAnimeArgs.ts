import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnimeWhereInput } from "../../../inputs/AnimeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAnimeArgs {
  @TypeGraphQL.Field(_type => AnimeWhereInput, {
    nullable: true
  })
  where?: AnimeWhereInput | undefined;
}
