import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AnimeScalarWhereInput } from "../inputs/AnimeScalarWhereInput";
import { AnimeUpdateManyMutationInput } from "../inputs/AnimeUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnimeUpdateManyWithWhereWithoutFanInput {
  @TypeGraphQL.Field(_type => AnimeScalarWhereInput, {
    nullable: false
  })
  where!: AnimeScalarWhereInput;

  @TypeGraphQL.Field(_type => AnimeUpdateManyMutationInput, {
    nullable: false
  })
  data!: AnimeUpdateManyMutationInput;
}
