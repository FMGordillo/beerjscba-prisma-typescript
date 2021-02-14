import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnimeCreateInput } from "../../../inputs/AnimeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAnimeArgs {
  @TypeGraphQL.Field(_type => AnimeCreateInput, {
    nullable: false
  })
  data!: AnimeCreateInput;
}
