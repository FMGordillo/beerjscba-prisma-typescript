import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { AnimeCountAggregate } from "../outputs/AnimeCountAggregate";
import { AnimeMaxAggregate } from "../outputs/AnimeMaxAggregate";
import { AnimeMinAggregate } from "../outputs/AnimeMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateAnime {
  @TypeGraphQL.Field(_type => AnimeCountAggregate, {
    nullable: true
  })
  count!: AnimeCountAggregate | null;

  @TypeGraphQL.Field(_type => AnimeMinAggregate, {
    nullable: true
  })
  min!: AnimeMinAggregate | null;

  @TypeGraphQL.Field(_type => AnimeMaxAggregate, {
    nullable: true
  })
  max!: AnimeMaxAggregate | null;
}
