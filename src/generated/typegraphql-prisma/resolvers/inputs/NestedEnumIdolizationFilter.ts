import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Idolization } from "../../enums/Idolization";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumIdolizationFilter {
  @TypeGraphQL.Field(_type => Idolization, {
    nullable: true
  })
  equals?: "CASUAL" | "ENTHUSIAST" | "LOVER" | undefined;

  @TypeGraphQL.Field(_type => [Idolization], {
    nullable: true
  })
  in?: Array<"CASUAL" | "ENTHUSIAST" | "LOVER"> | undefined;

  @TypeGraphQL.Field(_type => [Idolization], {
    nullable: true
  })
  notIn?: Array<"CASUAL" | "ENTHUSIAST" | "LOVER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIdolizationFilter, {
    nullable: true
  })
  not?: NestedEnumIdolizationFilter | undefined;
}
