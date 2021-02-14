import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { Idolization } from "../../enums/Idolization";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Idolization, {
    nullable: true
  })
  fanType!: "CASUAL" | "ENTHUSIAST" | "LOVER" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
