import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Idolization } from "../../enums/Idolization";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumIdolizationFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Idolization, {
    nullable: true
  })
  set?: "CASUAL" | "ENTHUSIAST" | "LOVER" | undefined;
}
