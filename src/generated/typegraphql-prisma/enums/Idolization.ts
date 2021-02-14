import * as TypeGraphQL from "type-graphql";

export enum Idolization {
  CASUAL = "CASUAL",
  ENTHUSIAST = "ENTHUSIAST",
  LOVER = "LOVER"
}
TypeGraphQL.registerEnumType(Idolization, {
  name: "Idolization",
  description: undefined,
});
