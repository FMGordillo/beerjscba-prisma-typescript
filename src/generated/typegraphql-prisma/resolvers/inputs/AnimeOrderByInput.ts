import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { UserOrderByInput } from "../inputs/UserOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AnimeOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  studio?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  releaseDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByInput, {
    nullable: true
  })
  fan?: UserOrderByInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fanId?: "asc" | "desc" | undefined;
}
