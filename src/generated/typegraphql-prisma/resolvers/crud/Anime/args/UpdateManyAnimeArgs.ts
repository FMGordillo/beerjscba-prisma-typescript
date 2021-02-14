import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { AnimeUpdateManyMutationInput } from "../../../inputs/AnimeUpdateManyMutationInput";
import { AnimeWhereInput } from "../../../inputs/AnimeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAnimeArgs {
  @TypeGraphQL.Field(_type => AnimeUpdateManyMutationInput, {
    nullable: false
  })
  data!: AnimeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AnimeWhereInput, {
    nullable: true
  })
  where?: AnimeWhereInput | undefined;
}
